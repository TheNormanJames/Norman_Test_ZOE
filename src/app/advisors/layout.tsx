import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.className} ${geistMono.className}`}
          style={{ background: '#fbfbfd' }}
        >
          <header className="HeaderMain">
            <div className="Logo">
              <Image
                src={'/Zoe_logo.svg'}
                width={100}
                height={100}
                alt="Logo"
              />
            </div>
          </header>
          {children}
        </body>
      </html>
    </>
  );
}
