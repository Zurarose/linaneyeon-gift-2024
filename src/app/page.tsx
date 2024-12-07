'use client';

import React from "react";
import Image from "next/image";
import BoxCape from '@/public/assets/box-cape.png';
import BoxBody from '@/public/assets/box-body.png';
import { cn } from "@/helpers/tailwind";
import ConfettiComponent from "@/ui-kit/Confetti";
import Cloud from '@/public/assets/cloud.svg'

export default function Home() {
  const [isOpened, setIsOpened] = React.useState(false);

  const onOpen = () => {
    setIsOpened(true);
  }

  return (
  <React.Fragment>
      {isOpened && <ConfettiComponent />}
      <Image src={Cloud.src} alt="cloud" className="drop-shadow-lg absolute top-5 left-5 transition-all hover:drop-shadow-[0px_0px_10px_#ebe9e9]" width={200} height={100} />
      <div onClick={onOpen} className={cn("cursor-pointer relative mt-96 flex flex-col justify-center items-center group", !isOpened ? "shake" : 'bounce')}>
        <Image className={cn("absolute -top-[120px] z-20 transition-all", isOpened ? "-mt-40 -ml-56 -rotate-45" : "group-hover:scale-110 ")} src={BoxCape.src} alt="box-body" width={390} height={200} />
        <Image className={cn("z-10 transition-all", !isOpened && "group-hover:scale-110")}src={BoxBody.src} alt="box-body" width={400} height={200} />
      </div>
   </React.Fragment>
  );
}
