import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const inter = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Interactive Comments Section',
  description: 'A CRUD app that has an interactive comments section. Users can comment and like posts and this infomration will be stored on the database',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-Light_gray ${inter.className}`}>{children}</body>
    </html>
  );
}
