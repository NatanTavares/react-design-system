import type { ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
};
