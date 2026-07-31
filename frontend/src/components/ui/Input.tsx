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

export default function Input({ label, placeholder, type, id, value, error, required, disabled, icon: Icon, onChange, className }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                    {label}
                </label>
            )}

            {/* Agregamos 'relative' aquí para que el icono absoluto se guíe por esta caja */}
            <div className="mt-2 relative flex items-center h-9 w-full">
                
                {Icon && (
                    /* Centrado vertical perfecto al inicio del campo */
                    <div className="absolute left-3 flex items-center pointer-events-none z-10">
                        <Icon className="w-4 h-4 text-gray-400" />
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
                        block w-full h-full rounded-md bg-white border border-gray-200 pr-3 text-base text-gray-900 placeholder:text-gray-400 
                        focus:outline-none focus:border-cyan-600 sm:text-sm
                        disabled:cursor-not-allowed disabled:opacity-50
                        ${Icon ? 'pl-9' : 'pl-3'} 
                        ${className ?? ''}
                    `}
                />
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
