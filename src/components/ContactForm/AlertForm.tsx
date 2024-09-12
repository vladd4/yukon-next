"use client";

import styles from "./Form.module.scss";

import { FC, useEffect, useRef } from "react";

import FormBack from "@/../public/form-back.webp";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertFormValues, alertFormSchema } from "../formSchema";
import { sendFormToTelegram } from "../../utils/sendFormToTelegram";

import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setShowAlert } from "../../redux/slices/alertSlice";
import useClickOutside from "../../hooks/useClickOutside";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDownRight } from "lucide-react";

const AlertForm: FC = () => {
  const t = useTranslations();

  const { showAlert } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();

  const alertRef = useRef(null);

  const handleCloseAlert = (value: boolean) => {
    dispatch(setShowAlert(value));
  };

  const btnElement =
    typeof window !== "undefined" ? document.getElementById("call-btn") : null;

  useClickOutside(alertRef, showAlert, handleCloseAlert, btnElement);

  const { register, handleSubmit, reset, formState } = useForm<AlertFormValues>(
    {
      defaultValues: {
        name: "",
        phone: "",
      },
      resolver: zodResolver(alertFormSchema),
    }
  );

  const { errors } = formState;

  const onSubmit = (data: AlertFormValues) => {
    let string = `Проект: Yukon Web \nІм'я: ${data.name} \nНомер телефону: ${data.phone}`;
    sendFormToTelegram(string);
    reset();
    dispatch(setShowAlert(false));
  };

  useEffect(() => {
    if (errors.phone) {
    }
  }, [errors]);
  return (
    <>
      <article
        ref={alertRef}
        className={`${styles.alert_root} ${showAlert ? styles.show : ""}`}
      >
        <article className={styles.alert_wrapper}>
          <h5>{t("alert_form.heading")}</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={t("alert_form.name_label")}
              autoComplete="off"
              required
              id="name"
              {...register("name")}
            />

            <input
              type="text"
              placeholder={t("alert_form.phone_label")}
              autoComplete="off"
              required
              id="phone"
              {...register("phone")}
            />

            <div className={styles.form_button}>
              <button type="submit">
                {t("alert_form.submit_button")} <ArrowDownRight />
              </button>
              <Image
                width={475}
                height={150}
                className={styles.background}
                alt="Background"
                src={FormBack}
              />
            </div>
          </form>
        </article>
      </article>
      <div className={`${styles.overflow} ${showAlert ? styles.show : ""}`} />
    </>
  );
};

export default AlertForm;
