import { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading.component';
import type { HeadingProps } from './heading.types';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    // Heading with <h1 />
    children: <h1>Heading with &lt;h1 /&gt;</h1>,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true
      }
    }
  }
};
