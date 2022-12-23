import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Input from "../src/components/Input";

interface IForm {
  [key: string]: string;
}

export default function () {
  const [formValues, setFormValues] = useState<IForm>({
    username: "",
    email: "",
    firstName: "",
    password: "",
  });

  const inputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Username",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
    },
    {
      name: "confirm-password",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: formValues.password,
      label: "Confirm Password",
    },
  ];

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  console.log(formValues);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col gap-[10px] w-[480px] py-[30px] px-[60px] rounded-[10px] bg-gray-200"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-[24px] mb-[10px] font-bold">
          Register
        </h1>
        {inputs.map((inputProps) => (
          <Input
            key={inputProps.name}
            value={formValues[inputProps.name]}
            onChange={handleChange}
            {...inputProps}
          />
        ))}
        <button
          className="w-full mt-[10px] bg-blue-700 text-white rounded-md px-[16px] py-[8px]"
          type="submit"
        >
          제출
        </button>
      </form>
    </div>
  );
}
