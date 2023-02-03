import AverageNumberForm from "../components/AverageNumberForm";
import AverageNumbersList from "../components/AverageNumbersList";

export default async function Page() {
  return (
    <main className="container mx-auto pt-24">
      <div className="flex flex-col justify-center items-center space-y-24">
        <AverageNumberForm />
        {/* @ts-expect-error Server Component */}
        <AverageNumbersList />
      </div>
    </main>
  );
}
