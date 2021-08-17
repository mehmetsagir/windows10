export const getLocal = (item) => {
  if (item && localStorage.getItem(item)) {
    return JSON.parse(localStorage.getItem(item));
  }
};

export const setLocal = (item, value) => {
  if (item && value) {
    localStorage.setItem(item, JSON.stringify(value));
  }
};
