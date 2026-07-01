import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }: ScrollRevealProps) {
  const ref = useScrollReveal();
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref as never} className={`reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
