# Library 없이 Form 관리해보기

## 1. `FormData` 객체 이용하기

```tsx
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
```

`form` 태그 하위에 있는 `input` 태그의 `name`과 `value`를 매핑시켜준다.

## 2. `useState`에서 객체로 관리하기.

```tsx
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
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "First Name",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Passwords don't match!",
      pattern: formValues.password,
      label: "Password",
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
```

```css
.input-error-message {
  display: none;
  color: red;
  font-size: 12px;
  padding: 4px 0;
}

input:invalid[data-focused="true"] {
  border: 1px solid red;
}

input:invalid[data-focused="true"] ~ .input-error-message {
  display: block;
}

```

라이브러리를 사용하지 않는다면, 흔하게 볼 수 있는 코드인 것 같다. 추가로 배울 수 있었던 점은 `input` 태그에 `pattern attribute`가 있다는 것과, `css`에 `invalid` 속성이 있다는 것이다.

### 참고
- [BEST Ways to Handle and Validate React Forms without a Library](https://www.youtube.com/watch?v=tIdNeoHniEY)
- [HTML attribute: pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)
- [CSS invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)