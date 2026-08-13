import type { ReactNode, MouseEventHandler } from "react";

const VARIANTES = {
  primario: 'bg-cyan-600 hover:bg-cyan-700 text-white',
  peligro: 'bg-red-500 hover:bg-red-600 text-white',
  secundario: 'bg-gray-800 hover:bg-gray-700 text-white'
} as const;

const ROUNDED_STYLES = {
  full: 'rounded-full',
  md: 'rounded-md',
  lg: 'rounded-lg',
  none: 'rounded-none'
} as const;


interface ButtonProps {
  children?: ReactNode;
  id: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: keyof typeof VARIANTES;
  rounded?: keyof typeof ROUNDED_STYLES;
}

export default function Button({ children, id, className, type, disabled, onClick, variant = 'primario', rounded = 'md' }: ButtonProps) {
  return (
    <button
      id={id}
      className={`${VARIANTES[variant]} ${ROUNDED_STYLES[rounded]} ${className ?? ''} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}