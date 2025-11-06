import { } from 'react';
import { Link, type LinkProps } from "react-router-dom";

import { classCombiner } from "../../utils";


interface AppLinkProps extends
  Omit<LinkProps, "className" | "children"> {
  children: React.ReactNode;
  className?: string;
  varName?: string;
}


const LinkFactory = ({ to, children, className, varName, ...props }: AppLinkProps) => {
  const path = typeof to === "string" ? to : to.pathname || "";
  const strChild = typeof children === "string" ? children : null;


  return (
    <Link
      to={to}
      className={classCombiner(`inline-flex flex-wrap items-center transition-colors py-1.5 px-2.5 gap-1.5
                bg-transparent hover:bg-primary-500 rounded-sm text-base`, className)}
      {...props}
    >
      <span className="text-pink-200 whitespace-nowrap animate-bounce-x -ml-1">{`->`}</span>
      <span className="text-sky-300">{`const`}</span>
      <span className="text-current">{varName}</span>
      <span className="text-pink-200">{`=`}</span>
      <span className="text-emerald-300 font-semibold">{`"${strChild || path}"`}</span>
      <span className="text-orange-200 -ml-1.5">{`;`}</span>
    </Link>
  );
};

export default LinkFactory;
