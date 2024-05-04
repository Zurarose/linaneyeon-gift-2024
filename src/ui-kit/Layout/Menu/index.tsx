'use client'

import {cn} from '@/helpers/tailwind';
import {MenuIcon} from '@/ui-kit/Icons';
import { cx } from 'class-variance-authority';
import React, { useEffect, useRef, useState } from 'react';

type ManuPropsT = {
  className?: string;
};

export default function Manu({className}: ManuPropsT) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    function handleClickOutside(event: MouseEvent) {
      if (!event.target) return;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          'w-10 h-10 bg-secondary hover:bg-secondary-hover rounded-full flex justify-center items-center cursor-pointer transition-all duration-300',
          className
        )}
        onClick={toggleOpen}
        >
        <MenuIcon size={20} />
      </div>
      <div ref={menuRef} className={cx('w-52 p-4 h-screen fixed top-0 left-0 bg-secondary rounded-r-lg transition-all duration-300', !open ? '-translate-x-52' : 'translate-x-0')}>
        menu
      </div>
    </>
  );
}
