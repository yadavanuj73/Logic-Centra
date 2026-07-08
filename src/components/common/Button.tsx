import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-bold tracking-[0.70px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[#006d3d] text-white hover:bg-[#005a33] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),0px_10px_15px_-3px_rgba(0,0,0,0.10)]',
        dark: 'bg-[#00273d] text-white hover:bg-[#001f30]',
        outline: 'border border-[#00273d] bg-transparent text-[#00273d] hover:bg-[#00273d] hover:text-white',
        'outline-white': 'border border-[rgba(255,255,255,0.3)] bg-transparent text-white hover:bg-white/10',
        ghost: 'bg-transparent text-white hover:bg-white/10',
        link: 'bg-transparent text-[#00273d] underline-offset-4 hover:underline p-0 font-normal tracking-[0.70px]',
      },
      size: {
        sm: 'h-8 px-4 py-1.5',
        md: 'h-10 px-6 py-2',
        lg: 'px-10 py-5 min-h-[58px]',
        hero: 'px-8 py-4 min-h-[54px]',
        icon: 'h-9 w-9',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        xl: 'rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'none',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
