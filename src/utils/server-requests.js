export const fetchRequest = async (inputs, urlParam, method) => {
  const response = await fetch(`http://localhost:3001/${urlParam}/`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  });
  const data = await response.json();

  return data;
};
