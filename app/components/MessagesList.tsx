import IMessageObject from "@/lib/IMessageObject";
import { Fragment } from "react";
import MessageElement from "./MessageElement";
import getData from "@/lib/getData";

export default async function MessagesList() {
  const messages: IMessageObject[] = await getData(
    `${process.env.VERCEL_URL}/api/allmessages/`,
    "GET"
  );
  return (
    <ul className="grid grid-cols-4 gap-4">
      {messages?.map((message, idx) => {
        return (
          <Fragment key={idx}>
            <MessageElement props={message} />
          </Fragment>
        );
      })}
    </ul>
  );
}
