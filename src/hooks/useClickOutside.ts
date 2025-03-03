"use client";

import { useEffect } from "react";

const useClickOutside = (
  componentRef: any,
  componentState: boolean,
  handleComponentState: (v: boolean) => void,
  nodeElement: HTMLElement | null
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentState) {
        const isClickOutsideComponent =
          componentRef.current &&
          !componentRef.current.contains(event.target as Node);

        const isClickOnToggleElement =
          nodeElement && nodeElement.contains(event.target as Node);

        if (isClickOutsideComponent && !isClickOnToggleElement) {
          handleComponentState(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentState, componentRef, handleComponentState, nodeElement]);
};

export default useClickOutside;
