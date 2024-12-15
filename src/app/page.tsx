'use client';
import { cn } from "@/helpers/tailwind";
import ConfettiComponent from "@/ui-kit/Confetti";
import CloudImage from '@/public/assets/cloud.svg'
import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import Image from "next/image";
import BoxCapeImage from '@/public/assets/box-cape.png';
import BoxBodyImage from '@/public/assets/box-body.png';
import Confetti from 'react-confetti';
import PoopyImage from '@/public/assets/Poopy.png';

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

import BoxCapeImage14 from '@/public/assets/box-cape-Лекри.png';
import BoxBodyImage14 from '@/public/assets/box-body-Лекри.png';

import BoxCapeImage15 from '@/public/assets/box-cape-unicorn.png';
import BoxBodyImage15 from '@/public/assets/box-body-unicorn.png';

import BoxCapeImage16 from '@/public/assets/box-cape-Арсван.png';
import BoxBodyImage16 from '@/public/assets/box-body-Арсван.png';

import BoxCapeImage17 from '@/public/assets/box-cape-Dr1ve_Kn1ght.png';
import BoxBodyImage17 from '@/public/assets/box-body-Dr1ve_Kn1ght.png';

import BoxCapeImage18 from '@/public/assets/box-cape-Кошмарик.png';
import BoxBodyImage18 from '@/public/assets/box-body-Кошмарик.png';



type ItemsT = {
  name: string,
  image: {
    cape: string,
    body: string
  },
  description: string
  color: string
}

const Items = [
  {name: 'килукити', image: {cape: BoxCapeImage1.src, body: BoxBodyImage1.src}, description: 'прелестная Линочка, поздравляю тебя с днем рождения! искренне желаю тебе крепкого здоровья, счастья, успехов и много много побед в лиге легенд. никогда не опускай свои ручки, ведь у тебя обязательно всё получится! твои персята любят тебя и всегда будут с тобой. ты принесла в наши жизни очень много радости !!!', color: '#f78db4'},
  {name: 'DenisBest', image: {cape: BoxCapeImage2.src, body: BoxBodyImage2.src}, description: 'Спасибо тебе что создала такое место где можно прийти отдохнуть и отвлечься от разных ирл проблем , пообщаться и хорошо провести время.  Желаю что бы твои стримы были ещё многие годы и ты нас продолжала радовать крутым контентом. Чтобы могла кушать разные вкусняшки и это никак не сказывалось на твоём здоровье.  Ну и пусть все твои желания и цели исполнились. С Днём Рождения Лина', color: '#1414A9'},
  {name: 'hakkyson-епта', image: {cape: BoxCapeImage3.src, body: BoxBodyImage3.src}, description: 'Пусть каждая минута твоей жизни будет наполнена искренними улыбками, теплотой и любовью! Продолжай вдохновлять нас своим оптимизмом, харизмой и уникальной энергетикой! Желаю тебе здоровья, счастья, креативности, побольше весёлых стримов и самых крутых персят и поросят! Пусть сбываются мечты, и впереди ждут только интересные приключения! С ДР))', color: '#ffff00'},
  {name: 'Kualon', image: {cape: BoxCapeImage4.src, body: BoxBodyImage4.src}, description: 'здрям с др! здрям с др! здрям с др! Желаю удачи и попутного ветра во всех начинаниях! Яркости жизни, душевного тепла, солнечных дней, радостных событий, интересных встреч и побед в ранкедах !!', color: '#1414A9'},
  {name: 'maria', image: {cape: BoxCapeImage5.src, body: BoxBodyImage5.src}, description: 'Линочка, с днём рождения! Я искренне считаю тебя одной из самых лучших девушек на свете, ты очень милая и забавная!! Желаю красивых мужиков в играх (и на фестах), поменьше мужланов и токсиков в чате, а так же вне стримов лампового общения с нами. Здоровья!! Это самое главное и счастье тебе, Линочка 🥹', color: '#e6e6fa'},
  {name: 'roile', image: {cape: BoxCapeImage6.src, body: BoxBodyImage6.src}, description: 'желаю тебе, чтоб животик не болел', color: '#4b0082'},
  {name: 'sikoraaxd', image: {cape: BoxCapeImage7.src, body: BoxBodyImage7.src}, description: 'Желаю оставаться такой же прекрасной, как цветок на рассвете', color: '#fb0662'},
  {name: 'viclyyy', image: {cape: BoxCapeImage8.src, body: BoxBodyImage8.src}, description: 'С днём рождения, солнышко Лина. Всего тебе вау вау, потрясающего, чтобы все было супер пупер и отлично. Будь счастлива,  ты прекрасна , милая, очень красивая и добренькая. Чмоки в щеки<3', color: '#ffa500'},
  {name: 'xneerx', image: {cape: BoxCapeImage9.src, body: BoxBodyImage9.src}, description: 'С ДР', color: '#00ad03'},
  {name: 'Вовочка(Каблук)', image: {cape: BoxCapeImage10.src, body: BoxBodyImage10.src}, description: 'С Днем Рождения Линотька, желаю тебе винов на всех твоих мужиков в гачах, легкого апа в лоляне и бана хейтерков, с дерещечкой булка :3 ❤️', color: '#00FF00'},
  {name: 'Исичка', image: {cape: BoxCapeImage11.src, body: BoxBodyImage11.src}, description: 'Поздравляю Линен тебя с твоим днем! Желаю побед на кси, крутых стримов и больше лп лутать ежедневно! Чтобы жкт был жив и никогда боле не беспокоил, чтобы ты могла лить 10 литров липтона в день и кушать много крабьих чипсов. Чтобы чат тебя не расстраивал своими срачками. И вообще все твои желания мои пожелания. Спасибо за тебя, твои стримы и все твои старания', color: '#7D79EA'},
  {name: 'Номанз', image: {cape: BoxCapeImage12.src, body: BoxBodyImage12.src}, description: 'С др бро ешь больше персиков', color: '#1bdad3'},
  {name: 'Твои-любимый-дед', image: {cape: BoxCapeImage13.src, body: BoxBodyImage13.src}, description: 'С днем рождения! Желаю реализовать всё, что задумано, достичь успехов в начинаниях, попробовать всё, что раньше было только в робких мечтах! Желаю всегда находиться в окружении любимых людей и преданных друзей, ну и, конечно же, счастья, здоровья и апнуть заветный даймод! С ЛЮБОВЬЮ ОТ ТВОЕГО ДЕДА', color: '#045704'},
  {name: 'Лекри', image: {cape: BoxCapeImage14.src, body: BoxBodyImage14.src}, description: 'Щястя, здоровья. Желаю тебе респекнуться в жёского топера и замейнить гнара (не путать с гареном)', color: '#b3ffb3'},
  {name: 'Dr1ve_Kn1ght', image: {cape: BoxCapeImage17.src, body: BoxBodyImage17.src}, description: 'Поздравляю с днем рождения Лин оставайся такой же милой и уютным владельцем Таверны Персики ❤️', color: '#4B0082'},
  {name: 'Арсван', image: {cape: BoxCapeImage16.src, body: BoxBodyImage16.src}, description: 'Лина, поздравляю тебя с днём рождения! Ты лучик солнца для многих людей, который зажигает огонь в их сердцах. Хочу пожелать всего самого наилучшего, быть здоровой, оставаться такой же доброй, умной и красивой девушкой, добиваться своих целей, собирать вокруг себя только приятных тебе людей и всегда быть счастливой. Ну и пожелаю тебе взять мастера в лиге, всегда выигрывать 50 на 50 в гачах и интересных детективных дорам :3', color: '#ff2f2f'},
  {name: 'unicorn', image: {cape: BoxCapeImage15.src, body: BoxBodyImage15.src}, description: 'С днём рождения, Лина! Незаметно прошёл годик, а ты не просто всё также хороша, но и стала лучше — случай, когда перетекающие 19 в 20 лет действительно красят. Надеюсь, в новом году ты порешаешь часть вопросов со здоровьем, ибо болеть — отвратно. Также прокачаешь навыки коммуникации, чтобы качество общения со зрителями и чатом выросло (что бы это ни значило). И, конечно, будешь находить столько времени на хобби, сколько хочется.', color: '#8b00ff'},
  {name: 'Кошмарик', image: {cape: BoxCapeImage18.src, body: BoxBodyImage18.src}, description: 'Здравствуй Линён-тан. Хочу поздравить тебя с этим знаменательным днём. С Днём твоего варенья, ты стала большой девотькой. Пусть жизнь твоя будет сладка как персиковое варенье, только пальчики не измажь. Желаю чтоб твоя ослепительно-яркая улыбка светила еще ярче чем когда-либо еще. Большинство невзгод не тревожили твое сердечко и здоровье было крепким =^_^=', color: '#696969'},
]

export default function Home() {
  const [modalData, setModalData] = React.useState<ItemsT | null>(null);
  const [opennedCount, setOpenedCount] = React.useState(0);

  const [isStart, setIsStart] = React.useState(false);

  const handleStart = () => {
    setIsStart(true);
  }

  const openModal = (item: ItemsT) => () => {
    setModalData(item);
    setOpenedCount(prev => prev + 1);
  };
  
  const closeModal = () => {
    if (!modalData) return
    const element = document.getElementById(modalData?.name);
    if (!element) return
    element.classList.add('fall');
    element.classList.add('pointer-events-none');
    element.classList.add('touch-none');
    setModalData(null);
  };

  return (
      <React.Fragment>
          {!!modalData && <Modal item={modalData} onClose={closeModal} />}
          <Poopy />
          {/* <Cloud /> */}
          <div className={cn("relative justify-between items-center", !!modalData && 'pointer-events-none touch-none')}>
            <div onClick={handleStart} className={cn((opennedCount !== Items?.length) && 'cursor-not-allowed')}>
              <PresentBoxMain className={cn((opennedCount !== Items?.length) && 'pointer-events-none touch-none')} />
            </div>
            {/* left side */}
            <div className={cn('transition-transform -translate-y-[1000px] duration-1000', isStart && 'translate-y-0')}>
              <div id={Items?.[0]?.name} className="absolute bottom-[-140px] left-[40px] z-20" onClick={openModal(Items[0])}>
                <SmallBox {...Items[0]} />
              </div>
              <div id={Items?.[1]?.name} className="absolute bottom-[-100px] left-[-120px] z-20" onClick={openModal(Items[1])}>
                <SmallBox {...Items[1]} />
              </div>
              <div id={Items?.[2]?.name} className="absolute bottom-[-40px] left-[-270px] z-10" onClick={openModal(Items[2])}>
                <SmallBox {...Items[2]} />
              </div>
              <div id={Items?.[3]?.name} className="absolute bottom-[20px] left-[-150px] z-0" onClick={openModal(Items[3])}>
                <SmallBox {...Items[3]} />
              </div>
              <div id={Items?.[16]?.name} className="absolute bottom-[0px] left-[-400px] z-0" onClick={openModal(Items[16])}>
                <SmallBox {...Items[16]} />
              </div>
              {/* right side */}
              <div id={Items?.[4]?.name} className="absolute bottom-[-145px] left-[205px] z-20" onClick={openModal(Items[4])}>
                <SmallBox {...Items[4]} />
              </div>
              <div id={Items?.[5]?.name} className="absolute bottom-[-100px] left-[365px] z-20" onClick={openModal(Items[5])}>
                <SmallBox {...Items[5]} />
              </div>
              <div id={Items?.[6]?.name} className="absolute bottom-[-40px] left-[500px] z-10" onClick={openModal(Items[6])}>
                <SmallBox {...Items[6]} />
              </div>
              <div id={Items?.[7]?.name} className="absolute bottom-[20px] left-[400px] z-0" onClick={openModal(Items[7])}>
                <SmallBox {...Items[7]} />
              </div>
              <div id={Items?.[17]?.name} className="absolute bottom-[0px] left-[635px] z-0" onClick={openModal(Items[17])}>
                <SmallBox {...Items[17]} />
              </div>
              {/* right  bottom side */}
              <div id={Items?.[8]?.name} className="absolute bottom-[-250px] left-[230px] z-50" onClick={openModal(Items[8])}>
                <SmallBox {...Items[8]} />
              </div>
              <div id={Items?.[9]?.name} className="absolute bottom-[-220px] left-[365px] z-40" onClick={openModal(Items[9])}>
                <SmallBox {...Items[9]} />
              </div>
              <div id={Items?.[10]?.name} className="absolute bottom-[-180px] left-[510px] z-30" onClick={openModal(Items[10])}>
                <SmallBox {...Items[10]} />
              </div>
              <div id={Items?.[11]?.name} className="absolute bottom-[-120px] left-[640px] z-20" onClick={openModal(Items[11])}>
                <SmallBox {...Items[11]} />
              </div>
              {/* right  bottom side */}
              <div id={Items?.[12]?.name} className="absolute bottom-[-250px] left-[15px] z-50" onClick={openModal(Items[12])}>
                <SmallBox {...Items[12]} />
              </div>
              <div id={Items?.[13]?.name} className="absolute bottom-[-220px] left-[-120px] z-40" onClick={openModal(Items[13])}>
                <SmallBox {...Items[13]} />
              </div>
              <div id={Items?.[14]?.name} className="absolute bottom-[-180px] left-[-260px] z-30" onClick={openModal(Items[14])}>
              <SmallBox {...Items[14]} />
              </div>
              <div id={Items?.[15]?.name} className="absolute bottom-[-120px] left-[-390px] z-20" onClick={openModal(Items[15])}>
                <SmallBox {...Items[15]} />
              </div>
            </div>
          </div>
      </React.Fragment>
  );
}

const Poopy = () => {
  const [isPopping, setIsPopping] = React.useState(false);
  
  useEffect(() => {
    let id = setTimeout(() => {
      setIsPopping(true);
    }, 30000)

    return () => {
      clearTimeout(id);
    }
  }, [])


  return <div className={cn("absolute bottom-0 left-0 rotate-45 -translate-x-96 translate-y-96 transition-transform duration-1000", isPopping && "-translate-x-24 translate-y-28") }><Image src={PoopyImage.src} width={PoopyImage.width} height={PoopyImage.height} alt="poopy" /></div>
}



const PresentBoxMain = ({className}: {className?: string}) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isInit, setIsInit] = React.useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setIsInit(true);
    }, 1500)

    return () => {
      clearTimeout(id);
    }
  }, [])

  const onOpen = () => {
    setIsOpened(true);
  }

  return (
    <>
      {isOpened && <ConfettiComponent />}
      <div onClick={onOpen} className={cn("drop-shadow-2xl relative mt-32 flex flex-col justify-center items-center group", !isInit && 'fall-start', !isOpened ? "shake" : 'bounce', className)}>
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
      <div onClick={onOpen} className={cn("drop-shadow-xl cursor-grab relative flex flex-col justify-center items-center group h-[200px] w-[150px]", !isOpened && "shake-small")}>
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
  );
}


const Modal = ({item, onClose}: {item: ItemsT, onClose: () => void}) => {
  const {description, name, color} = item;

  const textStyle = {color: color};

  return (
    <>
      {createPortal(
        <div className={cn("group fixed p-24 w-[800px] h-[400px] flex flex-col justify-center gap-3 items-center fadeout overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 z-100")}>
          <div className="z-10 flex flex-col gap-3 justify-center items-center">
            <p className="text-4xl tracking-wide drop-shadow-2xl stroke-text" style={textStyle}>{name}</p>
            <p className="text-lg text-black/80">{description}</p>
          </div>
          <button onClick={onClose} className="text-lg z-10 p-3 m-0 bg-rose-300 hover:bg-rose-200 rounded-md h-10 px-6 flex justify-center items-center shadow-lg mt-auto ">Спасибо</button>
          <Image src={CloudImage.src} alt="cloud" className="z-0 absolute top-0 left-0 drop-shadow-lg transition-all group-hover:drop-shadow-[0px_0px_10px_#d0cece]" width={800} height={400} />
        </div>, document.body)
      }
    </>)
}
