import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/vercel.svg" alt="Logo" width={100} height={100} />
      </a>
    </Link>
  );
}
