import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className='logo'>
      <Link href='/' passHref>
        <Image src='/vercel.svg' alt='Logo' width={100} height={70} />
      </Link>
      <style jsx>{`
        .logo {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
