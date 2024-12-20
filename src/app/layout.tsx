import type {Metadata} from 'next';
import Layout from '@/ui-kit/Layout';
import {marmelad} from '@/ui-kit/Fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'LinaNeyeon Present',
  description: 'Present for LinaNeyeon',
  authors: [{name: 'Oleh Sannikov', url: 'https://github.com/Zurarose'}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={marmelad.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
