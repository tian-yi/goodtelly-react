export const fetchData = (url) => {
  const result = fetch(url)
    .then((response) => response.json())
    .then((result) => result);
  return result;
};
