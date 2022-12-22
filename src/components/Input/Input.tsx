import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="formInput">
      <label>
        <span>{label}</span>
        <input
          className="p-[15px] my-[10px] outline rounded-sm"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
