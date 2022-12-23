import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link href="/form-data">FormData를 이용하는 방법</Link>
      <Link href="/use-state">useState를 이용하는 방법</Link>
    </div>
  );
}
