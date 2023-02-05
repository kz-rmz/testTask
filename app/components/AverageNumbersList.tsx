import getData from "@/lib/getData";

export default async function AverageNumbersList() {
  const numbersArray: number[] = await getData(
    `${process.env.VERCEL_URL}/api/averagenumber/`,
    "GET"
  );
  return (
    <div>
      <p>Все предыдущие средние значения:</p>
      <ul>
        {numbersArray.map((elem, idx) => {
          return <li key={idx}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}
