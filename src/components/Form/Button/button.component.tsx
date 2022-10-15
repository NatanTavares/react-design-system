import { Slot } from '@radix-ui/react-slot';
import type { ButtonProps } from './button.types';
import { clsx } from 'clsx';

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, asChild, className, ...rest } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'bg-cyan-500 rounded px-4 py-3 font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-gray-100',
        {},
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};
