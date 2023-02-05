"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function NewMessageForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event: any) => {
    setAuthor("");
    setText("");
    event.preventDefault();
    const data = {
      author: author,
      text: text,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = `${process.env.VERCEL_URL}/api/newmessage/`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    await fetch(endpoint, options);
    startTransition(() => {
      router.refresh();
    });
  };

  function handleAuthorInput(e: any) {
    setAuthor(e.target.value);
  }
  function handleTextInput(e: any) {
    setText(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center pt-24 max-w-md mx-auto space-y-3"
    >
      <label htmlFor="author">Автор:</label>
      <input
        id="author"
        type="text"
        className="form-input px-4 py-3 rounded-sm"
        minLength={2}
        maxLength={50}
        required
        onChange={handleAuthorInput}
        value={author}
      ></input>
      <label htmlFor="text">Текст сообщения:</label>
      <input
        id="text"
        type="text"
        className="form-input px-4 py-3 rounded-sm"
        minLength={2}
        maxLength={200}
        required
        onChange={handleTextInput}
        value={text}
      ></input>
      <button
        type="submit"
        className="bg-indigo-400 text-white rounded-sm px-4 py-2"
      >
        Разместить сообщение
      </button>
    </form>
  );
}
