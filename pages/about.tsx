import Link from "next/link";
import "../styles/globals.css";

export default function About() {
  return (
    <div>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </header>

      <div className="p-20 bg-blue-500 text-white rounded-lg m-20">
        <p>About</p>
      </div>
    </div>
  );
}
