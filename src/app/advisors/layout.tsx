import Image from 'next/image';
import '../globals.css';
import { Rubik } from 'next/font/google';
import style from './layout.module.css';
import Link from 'next/link';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${rubik.className}`}
          style={{ background: '#fbfbfd' }}
        >
          <header className={style.HeaderMain}>
            <Link href={'/'} className="Logo">
              <Image
                src={'/Zoe_logo.svg'}
                width={100}
                height={100}
                alt="Logo"
              />
            </Link>
          </header>
          {children}
        </body>
      </html>
    </>
  );
}
