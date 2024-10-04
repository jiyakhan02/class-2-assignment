import Link from "next/link";
export default function Introduction() {
  return (
    <div>
      <h1>
        <b>JAWERIYA</b>
      </h1>
      <ul>
        <li>
          <b>Fname:</b> Mursaleen
        </li>
        <li>
          <b>Date of birth:</b> 10-july 2003
        </li>
        <li>
          <b>Religion:</b> Islam
        </li>
        <li>
          <b>Marital:</b> Single
        </li>
        <li>
          <b>CNIC:</b> 42014678767
        </li>
        <li>
          <b>Nationality:</b> Pakistani
        </li>
      </ul>

      <Link href="/">
        <b>Back to home page</b>{" "}
      </Link>
    </div>
  );
}
