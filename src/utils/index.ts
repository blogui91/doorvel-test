export const randomString = () =>
  `${Math.ceil(Math.random() * 100000)}-${Math.ceil(Math.random() * 100000)}`;

export const arrayWithRandomValues = (itemsCount = 11) =>
  new Array(itemsCount).fill(null).map(() => randomString());

export const emptyResponse = () => ({
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  results: [],
});
