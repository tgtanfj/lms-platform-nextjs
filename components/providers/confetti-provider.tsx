"use client";

import ReactConfetti from "react-confetti";

import { useCofettiSotre } from "@/hooks/use-confetti-store";

export const ConfettiProvider = () => {
  const confetti = useCofettiSotre();

  if (!confetti.isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};
