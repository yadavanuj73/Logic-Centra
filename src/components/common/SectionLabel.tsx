import { cn } from '../../lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  color?: 'green' | 'green-light';
}

export function SectionLabel({ children, className, color = 'green' }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-sans text-sm font-normal leading-4 tracking-[0.70px]',
        color === 'green' && 'text-[#006d3d]',
        color === 'green-light' && 'text-[#6cfda8]',
        className
      )}
    >
      {children}
    </p>
  );
}
