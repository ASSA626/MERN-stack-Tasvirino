import { ChangeEvent, useState } from "react"

interface InputProps {
    id?: string,
    type?: string,
    name?: string,
    label?: string,
    value?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputBox = ({ id, type, name, label, value, onChange }: InputProps) => {

    const [focused, setFocused] = useState(false)

    const handleFocus = () => setFocused(true)
    const handleBlur = () => setFocused(false)

    return (
        <div className="relative w-full">
            <input
                id={id}
                type={type}
                name={name}
                className="w-full p-[10px] border border-[rgba(255, 255, 255, 0.25)] rounded-md outline-none text-[#000] text-md"
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className={`absolute right-0 p-[10px] text-md pointer-events-none text-gray-600 transition-all duration-300 ${
                    focused || value
                    ? '-top-3 text-[0.7rem] bg-white py-[2px] px-[10px] mr-2 rounded-sm'
                    : 'top-0 text-gray-600'
                }`}
            >
                {label}
            </label>
        </div>
    )
}

export default InputBox