import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Home Page
      </h1>
      <Link href="/apitest"> API Test Page</Link>
      <Link href="/predict"> Predict Page</Link>
    </main>
  );
}
