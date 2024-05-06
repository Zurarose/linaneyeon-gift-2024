import type {Metadata} from 'next';
import Layout from '@/ui-kit/Layout';
import {inter} from '@/ui-kit/Fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learing Japanese',
  description: 'Learing Japanese Application Created by Sergey Antonyuk and Oleh Sannikov',
  authors: [{name: 'Sergey Antonyuk'}, {name: 'Oleh Sannikov'}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
