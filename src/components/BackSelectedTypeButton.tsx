import { ArrowLeft } from "phosphor-react";

interface IBackButtonProps {
  onHandleRestartRequested: () => void;
}

export function BackSelectedTypeButton({ onHandleRestartRequested }: IBackButtonProps) {
  return (
    <button
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Voltar para escolha de tipo de feedback"
      onClick={onHandleRestartRequested}
      type="button"
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}
