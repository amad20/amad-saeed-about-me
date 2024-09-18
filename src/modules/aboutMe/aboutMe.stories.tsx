import type { Meta, StoryObj } from '@storybook/react';

import { AboutMe } from './AboutMe';

import { MemoryRouter } from 'react-router-dom';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'AboutMe',
  component: AboutMe,
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


} satisfies Meta<typeof AboutMe>;





export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'About Me',
    description: 'I chose computer science because I had an interest in technology when I was younger and saw how many different fields are in need of computer science majors. A fun fact is I am a big basketball fan, my favorite team is the Boston Celtics and my family is from Kurdistan.',
    imgsrc: '',
  },
};
