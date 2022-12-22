import { FormEventHandler } from "react";
import Input from "../src/components/Input";

export default function () {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);

    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <Input name="username" placeholder="UserName" />
        <Input name="email" placeholder="Email" />
        <Input name="firstName" placeholder="First Name" />
        <Input name="password" placeholder="Password" />
        <button
          className="bg-blue-700 text-white rounded-md px-[8px] py-[4px]"
          type="submit"
        >
          제출
        </button>
      </form>
    </div>
  );
}
