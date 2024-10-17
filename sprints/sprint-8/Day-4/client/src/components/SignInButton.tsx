import { SignInButtonProps } from "../types/button"


export const SignInButton = ({iconSvg, text, onClick}: SignInButtonProps) => {
  return (
    <button 
        className="flex flex-row items-center justify-center w-60 gap-2 rounded-3xl border-2 border-gray-700 p-2 mt-6"
        onClick={onClick}>
        {iconSvg}
        <p className="text-white text-sm">{text}</p>
    </button>
  )
}