import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './SignIn.page';
import { SignInPageProps } from './SignIn.types';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta<SignInPageProps>;

export const Default: StoryObj<SignInPageProps> = {};
