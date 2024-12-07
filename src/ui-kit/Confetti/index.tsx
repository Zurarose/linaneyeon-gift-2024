'use client';
import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-999">
      <Confetti opacity={0.8} />
    </div>
  );
};

export default ConfettiComponent;
