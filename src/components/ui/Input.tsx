import type { ComponentType } from "react";

interface InputProps {
    label?: string;
    placeholder?: string;
    type: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    id: string;
    value?: string;
    className?: string;
    icon?: ComponentType<{ className?: string }>; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label, 
    placeholder, 
    type, 
    id, 
    value, 
    error, 
    required, 
    disabled, 
    icon: Icon, 
    onChange, 
    className 
}: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label 
                htmlFor={id} 
                className="block text-xs font-medium uppercase tracking-wide text-[#B5A89E]"
                >
                    {label}
                </label>
            )}

    
            <div className="relative mt-2">              
                {Icon && (
                    /* Centrado vertical perfecto al inicio del campo */
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Icon className="h-4 w-4 text-[#8F817B]" />
                    </div>
                )}

                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    className={`
                        block
                        w-full
                        rounded-md
                        border
                        border-[#5C2E30]
                        bg-[#0F0809]
                        px-4
                        py-4
                        text-sm
                        text-[#F0EAE4]
                        placeholder:text-[#6F6260]
                        outline-none
                        transition
                        focus:border-[#6B4547]
                        focus:ring-1
                        focus:ring-[#6B4547]
                        disabled:cursor-no-allowed
                        disabled:opacity-50
                        ${Icon ? 'pl-11' : ''} 
                        ${className ?? ''}
                    `}
                />
            </div>

            {error && <p className="mt-1 text-sm text-red-700">{error}</p>}
        </div>
    );
}
