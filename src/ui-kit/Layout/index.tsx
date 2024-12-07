import React, {PropsWithChildren} from 'react';
import Logo from './Logo';

type LayoutPropsT = PropsWithChildren;

export default function Layout({children}: LayoutPropsT) {
  return (
    <div className="min-h-screen px-14 py-7 bg-main flex flex-col justify-start items-center">
      <header className="flex justify-center items-center">
        <Logo />
      </header>
      <main>{children}</main>
    </div>
  );
}
