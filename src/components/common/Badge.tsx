import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'green' | 'cyan' | 'default';
}

export function Badge({ children, className, variant = 'green' }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-xl px-[17px] py-[7px] w-fit',
        variant === 'green' && 'border border-[rgba(0,109,61,0.3)] bg-[rgba(0,109,61,0.2)]',
        variant === 'cyan' && 'border border-[rgba(0,181,224,0.3)] bg-[rgba(0,181,224,0.2)]',
        variant === 'default' && 'border border-[#e2e2e5] bg-[#f4f7f9]',
        className
      )}
    >
      {children}
    </div>
  );
}
