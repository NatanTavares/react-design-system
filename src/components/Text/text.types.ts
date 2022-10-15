import type { ReactNode } from 'react';

export type TextProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  className?: string;
};
