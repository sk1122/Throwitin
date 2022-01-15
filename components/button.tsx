import { useState, FC } from "react"

type Props = {
	gradient: boolean
	customCss?: string
}

const Button: FC<Props> = ({ children, gradient, customCss }) => {
	const [css, setCss] = useState(gradient ? 'bg-gradient-to-r text-white from-brand-heropink via-brand-lightpurple to-brand-lightblue' : 'bg-black text-white')
	
	return (
		<div className={`font-poppins flex justify-center items-center py-2 w-36 px-2 h-10 rounded-lg ${css} ${customCss}`}>
			{children}
		</div>
	)
}

export default Button;