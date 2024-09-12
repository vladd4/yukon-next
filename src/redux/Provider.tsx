"use client";

import { Provider } from "react-redux";
import store from "./store";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Context from "@/hooks/useContext";

import { useTranslation } from "react-i18next";

interface IReduxProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: IReduxProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <Context.Provider value={t}></Context.Provider>
      {children}
    </Provider>
  );
}
