import type { InputHTMLAttributes, ReactNode } from 'react';

export type TextInputRootProps = {
  children: ReactNode
}

export type TextInputIconProps = {
  children: ReactNode;
};

export type TextInputFieldProps = InputHTMLAttributes<HTMLInputElement>;
