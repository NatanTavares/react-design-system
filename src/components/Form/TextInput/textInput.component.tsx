import { Slot } from '@radix-ui/react-slot';
import type {
  TextInputFieldProps,
  TextInputIconProps,
  TextInputRootProps,
} from './textInput.types';

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
  return (
    <div className='flex h-12 items-center gap-3 w-full py-4 px-3 rounded bg-gray-800 focus-within:ring-2  ring-cyan-300'>
      {children}
    </div>
  );
};

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>;
};

const TextInputField: React.FC<TextInputFieldProps> = ({ ...rest }) => {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...rest}
    />
  );
};

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputField.displayName = 'TextInput.Field';

export const TextInput = {
  Root: TextInputRoot,
  Field: TextInputField,
  Icon: TextInputIcon,
};
