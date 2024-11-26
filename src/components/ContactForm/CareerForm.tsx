"use client";

import styles from "./Form.module.scss";

import { RefObject, useEffect, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import FormImage from "@/../public/form.webp";
import FormBack from "@/../public/form-back.webp";

import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import {
  sendFileToTelegram,
  sendFormToTelegram,
} from "../../utils/sendFormToTelegram";
import { careerFormSchema, CareerFormValues } from "../formSchema";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowDownRight, X } from "lucide-react";
import { Vacancy } from "@/types/vacancy.type";

interface CareerFormProps {
  vacancy: Vacancy | undefined;
}

const CareerForm = ({ vacancy }: CareerFormProps) => {
  const t = useTranslations();
  const locale = useLocale();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { register, handleSubmit, reset, formState } =
    useForm<CareerFormValues>({
      defaultValues: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      resolver: zodResolver(careerFormSchema),
    });

  const { errors } = formState;

  const handleImageClick = (fileInputRef: RefObject<HTMLInputElement>) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const onSubmit = (data: CareerFormValues) => {
    if (vacancy) {
      let string = `Проект: Yukon Web Career \nІм'я: ${data.name} \nЕлектронна пошта: ${data.email} \nНомер телефону: ${data.phoneNumber} \nВакансія: ${vacancy.heading}, ${vacancy.location}`;
      sendFormToTelegram(string);
      reset();
      if (resumeFile !== null) {
        sendFileToTelegram(resumeFile, `Резюме кандидата ${data.name}`);
        setResumeFile(null);
      }
      toast.success(
        locale === "uk"
          ? "Заявка успішно відправлена! Ми скоро зв'яжемось з Вами."
          : "Message was send succesfully! We will contact you soon."
      );
    }
  };

  useEffect(() => {
    if (errors.email || errors.phoneNumber) {
      toast.error(errors.email?.message || "");
      toast.error(errors.phoneNumber?.message || "");
    }
  }, [errors]);

  return (
    <section className={styles.root} id="form">
      <article className={styles.wrapper}>
        <div className={styles.heading}>
          <span>{t("form.span")}</span>
          <h3>{t("career.form_heading")}</h3>
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
            <div className={styles.name_input_div}>
              <input
                type="text"
                placeholder=""
                autoComplete="off"
                required
                id="phoneNumber"
                {...register("phoneNumber")}
              />
              <label htmlFor="phoneNumber">{t("alert_form.phone_label")}</label>
            </div>
            <div className={styles.resume_block}>
              <div className={styles.button_block}>
                <button
                  type="button"
                  onClick={() => handleImageClick(fileInputRef)}
                  className={styles.resume_btn}
                >
                  {t("career.resume_btn")}
                </button>
                {resumeFile && (
                  <div className={styles.filename}>
                    <p>{resumeFile.name}</p>
                    <X size={18} onClick={() => setResumeFile(null)} />
                  </div>
                )}
              </div>
              <input
                type="file"
                accept=".doc,.docx,.pdf,.jpg,.png"
                onChange={(e) => handleFileChange(e)}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <p>{t("career.resume_hint")}</p>
            </div>

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

export default CareerForm;
