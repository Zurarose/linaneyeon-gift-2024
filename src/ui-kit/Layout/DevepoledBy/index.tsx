import {Paragraph} from '@/ui-kit/Typography';
import Link from 'next/link';
import React from 'react';

export default function DevepoledBy() {
  return (
    <Paragraph spacing={'tight'} fontWeight={'light'} variant={'sm'}>
      Developed by{' '}
      <Link href={'https://t.me/GranSly'} target="_blank">
        Sergey Antonyuk
      </Link>{' '}
      and{' '}
      <Link href={'https://t.me/Zurarose'} target="_blank">
        Oleh Sannikov
      </Link>
    </Paragraph>
  );
}
