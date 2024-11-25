"use client";

import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > window.innerHeight - 100);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return { isScrolled };
};

export default useScroll;
