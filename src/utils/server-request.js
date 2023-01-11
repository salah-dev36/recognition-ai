export const fetchRequest = async (inputs, urlParam, method) => {
  const response = await fetch(`${process.env.REACT_APP_MYAPI_URL}${urlParam}/`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  });
  const data = await response.json();

  return data;
};
