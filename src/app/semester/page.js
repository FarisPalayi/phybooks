import Link from "next/link";

//TODO: make this page redirect to semester 1
export default function Page() {
  return (
    <main className="main">
      <h1>Semester</h1>
      <ul>
        {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
          <li key={num}>
            <Link href={`semester/${num}`}>Semester {num}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
