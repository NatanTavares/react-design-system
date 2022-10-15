import { Slot } from '@radix-ui/react-slot';
import type { TextProps } from './text.types';
import { clsx } from 'clsx';

export const Text: React.FC<TextProps> = (props) => {
  const { children, size = 'md', asChild = false } = props;

  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
};
