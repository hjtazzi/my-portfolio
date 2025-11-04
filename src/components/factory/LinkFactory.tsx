import { } from 'react';
import { NavLink, type NavLinkProps } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";

import { classCombiner } from "../../utils";
import HighlighterFactory from './HighlighterFactory';


const linkVariants = cva(
  "inline-flex items-center transition-colors gap-2 bg-transparent",
  {
    variants: {
      variant: {
        primary: "text-sky-400 hover:text-sky-300 active:text-sky-500",
        code: "hover:bg-primary-500 rounded-sm",
      },
      size: {
        txt: "text-[1em]",
        sm: "text-sm",
        md: "text-base py-2 px-2.5",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);


interface AppLinkProps extends
  Omit<NavLinkProps, "className" | "children">,
  VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
  varName?: string;
}


const LinkFactory = ({ to, end, children, variant, size, className, varName, ...props }: AppLinkProps) => {
  const path = typeof to === "string" ? to : to.pathname || "";
  const strChild = typeof children === "string" ? children : null;
  const codeVar = `const ${varName} = "${strChild || path}";`


  return (
    <NavLink
      to={to}
      end={end}
      {...props}
      className={({ }) =>
        classCombiner(linkVariants({ variant, size }), className)
      }
    >
      {variant !== "code"
        ? children
        : <>
          <span className='text-pink-400 animate-bounce-x'>{`->`}</span>
          <HighlighterFactory customStyle={{ fontSize: "1.1em", lineHeight: 1 }}>{codeVar}</HighlighterFactory>
        </>}
    </NavLink>
  );
};

export default LinkFactory;
