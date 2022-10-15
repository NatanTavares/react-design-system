import { Slot } from '@radix-ui/react-slot';
import type { HeadingProps } from './heading.types';
import { clsx } from 'clsx';

export const Heading: React.FC<HeadingProps> = (props) => {
  const { children, size = 'md', asChild = false } = props;

  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx('text-gray-100 font-sans font-bold', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
};
