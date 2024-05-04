import React, {PropsWithChildren} from 'react';
import Logo from './Logo';
import DevepoledBy from './DevepoledBy';
import Manu from './Menu';

type LayoutPropsT = PropsWithChildren;

export default function Layout({children}: LayoutPropsT) {
  return (
    <div className="min-h-screen px-14 py-7 bg-main flex flex-col justify-between items-center">
      <header className="flex justify-center items-center">
        <Manu className="absolute top-4 left-4" />
        <Logo />
      </header>
      <main>{children}</main>
      <footer className="flex justify-center items-center">
        <DevepoledBy />
      </footer>
    </div>
  );
}
