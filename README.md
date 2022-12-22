# Library 없이 Form 관리해보기

## 1. `FormData` 객체 이용하기

```tsx
function Home() {
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