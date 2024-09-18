import type { Meta, StoryObj } from '@storybook/react';

import { Hobby } from './Hobby';

import { MemoryRouter } from 'react-router-dom';

import carSrc from './typer.jpg'
import ballSrc from './jays.jpg'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Hobby',
  component: Hobby,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //argTypes: {
   // backgroundColor: { control: 'color' },
  //},

  decorators: (Story) => {
    return (
        <MemoryRouter>
            <Story />
        </MemoryRouter>
    )
}

} satisfies Meta<typeof Hobby>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basketball: Story = {
  args: {
    title: 'Basketball',
    description: 'I like to play and watch basketball',
    imgsrc: ballSrc
  },
};

export const Cars: Story = {
  args: {
    title: 'Cars',
    description: 'I am interested in Cars',
    imgsrc: carSrc
  },
  
};
