import { FormEventHandler } from "react";
import Input from "../src/components/Input";
import Link from "next/link";

export default function Home() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);

    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Link href="/form-data">FormData를 이용하는 방법</Link>
    </div>
  );
}
