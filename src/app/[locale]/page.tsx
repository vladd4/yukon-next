import MainPage from "@/components/MainPage";

type HomeProps = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: HomeProps) {
  return <MainPage locale={locale} />;
}
