import React from "react";

import About from "@/components/About/About";
import Clients from "@/components/Clients/Clients";
import Header from "@/components/Header/Header";
import News from "@/components/NewsBlock/News";
import Partners from "@/components/Partners/Partners";
import ProjectSlider from "@/components/Projects/ProjectSlider";
import Welcome from "@/components/Welcome/Welcome";

export default function MainPage() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Partners />
      <Clients />
      <ProjectSlider />
      <News isAll={false} />
    </>
  );
}
