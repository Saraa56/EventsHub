import type { ReactNode, MouseEventHandler } from "react";

const VARIANTES = {
  primario: "bg-[#351C1D] hover:bg-[#472628] text-[#F0EAE4]",
  peligro: "bg-red-500 hover:bg-red-600 text-white",
  secundario: "bg-[#180C0D] hover:bg-[#281516] text-[#F0EAE4]",
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

export default function Button({ 
  children, 
  id, 
  className, 
  type, 
  disabled, 
  onClick, 
  variant = 'primario', 
  rounded = 'md' 
}: ButtonProps) {
  return (
    <button
      id={id}
      className={`
        ${VARIANTES[variant]}
        ${ROUNDED_STYLES[rounded]}
        ${className ?? ""}
         px-4 py-3
        text-sm font-semibold
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#B5A89E]
        disabled:opacity-50
        disabled:cursor-not-allowed  
        `}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}