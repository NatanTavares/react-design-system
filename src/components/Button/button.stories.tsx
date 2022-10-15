import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button.component';
import type { ButtonProps } from './button.types';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
