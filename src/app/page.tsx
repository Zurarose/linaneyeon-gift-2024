'use client';

import React from "react";
import Image from "next/image";
import BoxCapeImage from '@/public/assets/box-cape.png';
import BoxBodyImage from '@/public/assets/box-body.png';
import Confetti from 'react-confetti';

import BoxCapeImage1 from '@/public/assets/box-cape-килукити.png';
import BoxBodyImage1 from '@/public/assets/box-body-килукити.png';

import BoxCapeImage2 from '@/public/assets/box-cape-DenisBest.png';
import BoxBodyImage2 from '@/public/assets/box-body-DenisBest.png';

import BoxCapeImage3 from '@/public/assets/box-cape-hakkyson-епта.png';
import BoxBodyImage3 from '@/public/assets/box-body-hakkyson-епта.png';  

import BoxCapeImage4 from '@/public/assets/box-cape-Kualon.png';
import BoxBodyImage4 from '@/public/assets/box-body-Kualon.png';

import BoxCapeImage5 from '@/public/assets/box-cape-maria.png';
import BoxBodyImage5 from '@/public/assets/box-body-maria.png';

import BoxCapeImage6 from '@/public/assets/box-cape-roile.png';
import BoxBodyImage6 from '@/public/assets/box-body-roile.png';

import BoxCapeImage7 from '@/public/assets/box-cape-sikoraaxd.png';
import BoxBodyImage7 from '@/public/assets/box-body-sikoraaxd.png';

import BoxCapeImage8 from '@/public/assets/box-cape-viclyyy.png';
import BoxBodyImage8 from '@/public/assets/box-body-viclyyy.png';

import BoxCapeImage9 from '@/public/assets/box-cape-xneerx.png';
import BoxBodyImage9 from '@/public/assets/box-body-xneerx.png';

import BoxCapeImage10 from '@/public/assets/box-cape-Вовочка(Каблук).png';
import BoxBodyImage10 from '@/public/assets/box-body-Вовочка(Каблук).png';

import BoxCapeImage11 from '@/public/assets/box-cape-Исичка.png';
import BoxBodyImage11 from '@/public/assets/box-body-Исичка.png';

import BoxCapeImage12 from '@/public/assets/box-cape-Номанз.png';
import BoxBodyImage12 from '@/public/assets/box-body-Номанз.png';

import BoxCapeImage13 from '@/public/assets/box-cape-Твои-любимый-дед.png';
import BoxBodyImage13 from '@/public/assets/box-body-Твои-любимый-дед.png';

type ItemsT = {
  name: string,
  image: {
    cape: string,
    body: string
  },
  description: string
}

const Items = [
  {name: 'килукити', image: {cape: BoxCapeImage1.src, body: BoxBodyImage1.src}, description: 'килукити'},
  {name: 'DenisBest', image: {cape: BoxCapeImage2.src, body: BoxBodyImage2.src}, description: 'DenisBest'},
  {name: 'hakkyson-епта', image: {cape: BoxCapeImage3.src, body: BoxBodyImage3.src}, description: 'hakkyson-епта'},
  {name: 'Kualon', image: {cape: BoxCapeImage4.src, body: BoxBodyImage4.src}, description: 'Kualon'},
  {name: 'maria', image: {cape: BoxCapeImage5.src, body: BoxBodyImage5.src}, description: 'maria'},
  {name: 'roile', image: {cape: BoxCapeImage6.src, body: BoxBodyImage6.src}, description: 'roile'},
  {name: 'sikoraaxd', image: {cape: BoxCapeImage7.src, body: BoxBodyImage7.src}, description: 'sikoraaxd'},
  {name: 'viclyyy', image: {cape: BoxCapeImage8.src, body: BoxBodyImage8.src}, description: 'viclyyy'},
  {name: 'xneerx', image: {cape: BoxCapeImage9.src, body: BoxBodyImage9.src}, description: 'xneerx'},
  {name: 'Каблук', image: {cape: BoxCapeImage10.src, body: BoxBodyImage10.src}, description: 'Каблук'},
  {name: 'Исичка', image: {cape: BoxCapeImage11.src, body: BoxBodyImage11.src}, description: 'Исичка'},
  {name: 'Номанз', image: {cape: BoxCapeImage12.src, body: BoxBodyImage12.src}, description: 'Номанз'},
  {name: 'Твои-любимый-дед', image: {cape: BoxCapeImage13.src, body: BoxBodyImage13.src}, description: 'Твои-любимый-дед'},
]

import { cn } from "@/helpers/tailwind";
import ConfettiComponent from "@/ui-kit/Confetti";
import CloudImage from '@/public/assets/cloud.svg'

export default function Home() {

  return (
      <React.Fragment>
          {/* <Cloud /> */}
          <div className="relative justify-between items-center">
            <PresentBoxMain />
            {/* left side */}
            <div className="absolute bottom-[-140px] left-[40px] z-20">
              <SmallBox {...Items[0]} />
            </div>
            <div className="absolute bottom-[-100px] left-[-120px] z-20">
              <SmallBox {...Items[1]} />
            </div>
            <div className="absolute bottom-[-40px] left-[-270px] z-10">
              <SmallBox {...Items[2]} />
            </div>
            <div className="absolute bottom-[20px] left-[-150px] z-0">
              <SmallBox {...Items[3]} />
            </div>
            {/* right side */}
            <div className="absolute bottom-[-145px] left-[205px] z-20">
              <SmallBox {...Items[4]} />
            </div>
            <div className="absolute bottom-[-100px] left-[365px] z-20">
              <SmallBox {...Items[5]} />
            </div>
            <div className="absolute bottom-[-40px] left-[500px] z-10">
              <SmallBox {...Items[6]} />
            </div>
            <div className="absolute bottom-[20px] left-[400px] z-0">
              <SmallBox {...Items[7]} />
            </div>
            {/* right  bottom side */}
            <div className="absolute bottom-[-250px] left-[230px] z-50">
              <SmallBox {...Items[8]} />
            </div>
            <div className="absolute bottom-[-220px] left-[365px] z-40">
              <SmallBox {...Items[9]} />
            </div>
            <div className="absolute bottom-[-180px] left-[510px] z-30">
              <SmallBox {...Items[10]} />
            </div>
            <div className="absolute bottom-[-120px] left-[640px] z-20">
              <SmallBox {...Items[11]} />
            </div>
            {/* right  bottom side */}
            <div className="absolute bottom-[-250px] left-[15px] z-50">
              <SmallBox {...Items[12]} />
            </div>
            <div className="absolute bottom-[-220px] left-[-120px] z-40">
              <SmallBox {...Items[0]} />
            </div>
            <div className="absolute bottom-[-180px] left-[-260px] z-30">
              <SmallBox {...Items[0]} />
            </div>
            <div className="absolute bottom-[-120px] left-[-390px] z-20">
              <SmallBox {...Items[0]} />
            </div>
          </div>
      </React.Fragment>
  );
}



const PresentBoxMain = ({className}: {className?: string}) => {
  const [isOpened, setIsOpened] = React.useState(false);

  const onOpen = () => {
    setIsOpened(true);
  }

  return (
    <>
      {isOpened && <ConfettiComponent />}
      <div onClick={onOpen} className={cn("cursor-pointer drop-shadow-2xl relative mt-32 flex flex-col justify-center items-center group", !isOpened ? "shake" : 'bounce', className)}>
          <Image className={cn("absolute -top-[130px] z-20 transition-all", isOpened ? "-mt-40 -ml-56 -rotate-45" : "group-hover:scale-110 group-hover:-top-[150px]")} src={BoxCapeImage.src} alt="box-cape" width={390} height={200} />
          <Image className={cn("z-10 transition-all", !isOpened && "group-hover:scale-110")}src={BoxBodyImage.src} alt="box-body" width={400} height={200} />
      </div>
    </>
   
  );
}


const SmallBox = ({description, image, name}: ItemsT) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isConfetti, setIsConfetti] = React.useState(false);
  const onOpen = () => {
    if (isOpened) return
    setIsOpened(true);
    setIsConfetti(true);
    setTimeout(() => {
      setIsConfetti(false);
    }, 3000)
  }

  return (
    <>
        
      <div onClick={onOpen} className={cn("drop-shadow-xl cursor-pointer relative flex flex-col justify-center items-center group h-[200px] w-[150px]", !isOpened && "shake-small")}>
      {isOpened && <Confetti recycle={isConfetti} numberOfPieces={40} confettiSource={{
            w: 50,
            h: 20,
            x: 150,
            y: 150,
          }} 
          height={400} width={300} gravity={0.2} opacity={0.8} className="!z-[999] absolute !-top-[100px] !-left-[100px]" />}
          <Image className={cn("absolute -top-[15px] z-20 transition-all", isOpened ? "-mt-14 -ml-20 -rotate-45" : "group-hover:scale-110 group-hover:-mt-2")} src={image.cape} alt="box-cape" width={150} height={100} />
          <Image className={cn("z-10 transition-all", !isOpened && "group-hover:scale-110")}src={image.body} alt="box-body" width={150} height={130} />
      </div>
    </>
   
  );
}


const Cloud = () => {
  return <Image src={CloudImage.src} alt="cloud" className="drop-shadow-lg transition-all hover:drop-shadow-[0px_0px_10px_#ebe9e9]" width={200} height={100} />
}
