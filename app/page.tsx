import NewMessageForm from "./components/NewMessageForm";
import MessagesList from "./components/MessagesList";

export default async function Home() {
  return (
    <>
      <main className="container mx-auto space-y-24">
        <NewMessageForm />
        {/* @ts-expect-error Server Component */}
        <MessagesList />
      </main>
    </>
  );
}
