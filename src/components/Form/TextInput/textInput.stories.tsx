import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './textInput.component';
import type { TextInputRootProps } from './textInput.types';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Field placeholder={'Type your e-mail address'} />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Field placeholder={'Type your e-mail address'} />,
  },
};
