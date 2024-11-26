"use client";

import styles from "./Form.module.scss";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import FormImage from "@/../public/form.webp";
import FormBack from "@/../public/form-back.webp";

import { useForm } from "react-hook-form";
import { sendFormToTelegram } from "../../utils/sendFormToTelegram";
import { FormValues, formSchema } from "../formSchema";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowDownRight } from "lucide-react";
import toast from "react-hot-toast";

interface ContactFormProps {
  isCareer?: boolean;
}

const ContactForm = ({ isCareer }: ContactFormProps) => {
  const t = useTranslations();
  const locale = useLocale();

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    let string = `Проект: Yukon Web \nІм'я: ${data.name} \nЕлектронна пошта: ${data.email} \nПовідомлення: ${data.message}`;
    sendFormToTelegram(string);
    toast.success(
      locale === "uk"
        ? "Повідомлення успішно відправлене!"
        : "Message was send succesfully!"
    );
    reset();
  };

  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email?.message || "");
    }
  }, [errors]);
  return (
    <section className={styles.root} id="form">
      <article className={styles.wrapper}>
        <div className={styles.heading}>
          <span>{t("form.span")}</span>
          <h3>
            {isCareer
              ? "Хочете працювати у нас? Заповніть форму, щоб ми змогли зв'язатись з вами"
              : t("form.heading")}
          </h3>
        </div>
        <div className={styles.form_block}>
          <Image
            alt="Contact Form"
            src={FormImage}
            width={797}
            height={591}
            className="aos-init"
          />
          <form onSubmit={handleSubmit(onSubmit)} className="aos-init">
            <div className={styles.name_input_div}>
              <input
                type="text"
                placeholder=""
                autoComplete="off"
                required
                id="name"
                {...register("name")}
              />
              <label htmlFor="name">{t("form.name_label")}</label>
            </div>
            <div className={styles.name_input_div}>
              <input
                type="text"
                placeholder=""
                autoComplete="off"
                required
                id="email"
                {...register("email")}
              />
              <label htmlFor="email">{t("form.mail_label")}</label>
            </div>
            <div className={styles.message_input_div}>
              <textarea
                placeholder=""
                autoComplete="off"
                required
                id="message"
                {...register("message")}
              />
              <label htmlFor="message">{t("form.message_label")}</label>
            </div>
            {isCareer && <button>Завантажити резюме</button>}
            <div className={styles.form_button}>
              <button type="submit">
                {t("form.submit_button")} <ArrowDownRight />
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
        </div>
      </article>
    </section>
  );
};

export default ContactForm;
