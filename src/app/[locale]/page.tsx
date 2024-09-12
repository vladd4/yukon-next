import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import MainPage from "@/components/MainPage";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home() {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  return (
    <>
      <MainPage />
      <ContactForm />
      <Footer />
    </>
  );
}
