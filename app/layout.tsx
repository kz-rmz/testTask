import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head />
      <body>
        <header className="flex items-center justify-center h-28 bg-indigo-400">
          <ul className="flex text-xl tracking-wide text-white space-x-14 uppercase">
            <li className="hover:text-slate-600">
              <Link href={"/"}>Сообщения</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link href={"/average"}>Средние числа</Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
