import Link from "next/link";

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        <li>Typescript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <Link href="/">
        <b>Back to Home</b>
      </Link>
    </div>
  );
}
