import { useEffect } from "react";
import { useAppDispatch } from "./redux-hooks";
import { setFilteredVacancies } from "@/redux/slices/searchSlice";

const useSearchDebounce = (searchValue: string, getData: () => void) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchValue) {
        getData();
      } else {
        dispatch(setFilteredVacancies(null));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);
};

export default useSearchDebounce;
