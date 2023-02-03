export default async function getData(path: string, method: string) {
  const res = await fetch(`http://localhost:3000/api/${path}`, {
    method: method,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
