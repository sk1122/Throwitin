import { useState, FC } from "react";
import Link from 'next/link'

type Props = {
  gradient: boolean;
  customCss?: string;
  link?: string
};

const Button: FC<Props> = ({ link, children, gradient, customCss }) => {
  const [css, setCss] = useState(
    gradient
      ? "bg-gradient-to-r text-white from-brand-heropink via-brand-lightpurple to-brand-lightblue"
      : "bg-black text-white"
  );

  return (
    <Link href={link ? link : '/'}>
      <div
        className={`font-poppins flex justify-center items-center py-2 w-36 px-2 h-10 rounded-lg cursor-pointer text-sm ${css} ${customCss}`}>
        {children}
      </div>
    </Link>
  );
};

export default Button;
