import { sendMail } from "@/lib/mail";

const send = async () => {
  "use server";
  await sendMail({
    to: "sinerawijethunga@gmail.com",
    name: "Vahid",
    subject: "Test Mail",
    body: `<h1>Hello World!</h1>`,
  });
};

export default function Home() {
  return (
    <>
      <form>
        <button formAction={send}>test</button>
      </form>
    </>
  );
}
