"use client";
import { useRouter } from "next/navigation";
import { useTransition, createRef } from "react";

export default function AverageNumberForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const inputValueRef = createRef<HTMLInputElement>();
  const floatRadioButton = createRef<HTMLInputElement>();
  const integerRadioButton = createRef<HTMLInputElement>();

  async function handleSubmit(event: any) {
    event.preventDefault();
    const selectedRadio = floatRadioButton.current?.checked ? true : false;
    const dataToPost = {
      numberValue: inputValueRef.current?.value,
      isFloat: selectedRadio,
    };
    const JSONdata = JSON.stringify(dataToPost);
    const endpoint = `${process.env.VERCEL_URL}/api/averagenumber/`;
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputNumber" className="mr-2">
        Введите число:
      </label>
      <input
        type="number"
        name="inputNumber"
        id="inputNumber"
        min={0}
        ref={inputValueRef}
        value={inputValueRef.current?.value}
        required
      />
      <fieldset>
        <legend>Выберите параметры числа:</legend>
        <div>
          <input
            type="radio"
            id="float"
            name="radioButtonValue"
            ref={integerRadioButton}
          />
          <label htmlFor="float" className="pl-2">
            Целые
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="integer"
            name="radioButtonValue"
            ref={floatRadioButton}
          />
          <label htmlFor="integer" className="pl-2">
            Рациональные
          </label>
        </div>
      </fieldset>
      <button type="submit" className="bg-indigo-400"></button>
    </form>
  );
}
