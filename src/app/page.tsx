import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        <b>Welcome to My CV</b>
      </h1>
      <br />
      <nav>
        <ul>
          <li>
            <Link href="/introduction"><b>Introduction</b></Link>
          </li>
          <li>
            <Link href="/education"><b>Education</b></Link>
          </li>
          <li>
            <Link href="/experience"><b>Experience</b></Link>
          </li>
          <li>
            <Link href="/skills"><b>Skills</b></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
