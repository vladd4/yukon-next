export const getFromSessionStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.sessionStorage.getItem(key);
  }
  return null;
};
