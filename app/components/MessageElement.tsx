import IMessageObject from "@/lib/IMessageObject";

export default function MessageElement({ props }: { props: IMessageObject }) {
  return (
    <li className="rounded-lg bg-indigo-400 space-y-4 p-4 text-white">
      <p>{props.author}</p>
      <p>{props.text}</p>
    </li>
  );
}
