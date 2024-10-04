import Link from "next/link";

export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <ul>
        <li>Software Engineer - XYZ Company (2020-Present)</li>
        <li>Intern - ABC Tech (2019-2020)</li>
      </ul>
      <Link href="/">
        <b>Back to Home</b>
      </Link>
    </div>
  );
}
