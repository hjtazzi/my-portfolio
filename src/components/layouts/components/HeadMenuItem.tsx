import { } from 'react';
import { Link, type LinkProps } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";

import { classCombiner } from '../../../utils';


const linkVariants = cva(
  "h-full flex items-center px-6 transition-colors text-sm text-primary-100 whitespace-nowrap border-b border-b-transparent active:bg-primary-500 active:text-primary-50",
  {
    variants: {
      variant: {
        default: "",
        desktop: "hover:bg-primary-500 hover:text-primary-50 hover:border-b-primary-50",
        active: "text-text-base border-b-2 border-b-orange-500",
        mobileActive: "text-text-base"
      },
      border: {
        none: "",
        right: "border-r border-r-primary-500",
        left: "border-l border-l-primary-500",
      },
      isMobile: {
        true: "px-4 py-4 border-b border-b-primary-500"
      }
    },
    defaultVariants: {
      variant: "default",
      border: "none",
      isMobile: false,
    }
  }
)


export interface HeadMenuItemProps extends
  Omit<LinkProps, "className" | "children">,
  VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
}


const HeadMenuItem = ({ to, children, variant, border, isMobile, className, ...props }: HeadMenuItemProps) => {
  return (
    <Link to={to} className={classCombiner(linkVariants({ variant, border, isMobile }), className)} {...props}>
      {isMobile && (
        <span className={classCombiner(`inline-flex items-center justify-start w-4 font-bold transition-opacity opacity-0 ${variant === "mobileActive" && 'opacity-100'}`)}>
          {'>'}</span>)}

      {children}
    </Link>
  )
}

export default HeadMenuItem;
