import Link from "next/link";

export default function Education() {
  return (
    <div>
      <h1>Education</h1>
      <ul>
        <li>BS Computer Science - ABC University (2015-2019)</li>
        <li>Intermediate - XYZ College (2013-2015)</li>
      </ul>
      <Link href="/">
        <b>Back to Home</b>
      </Link>
    </div>
  );
}
