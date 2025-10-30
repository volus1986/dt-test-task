import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Input from '@/app/components/Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password'],
            description: 'Input type',
        },
        clearable: {
            control: 'boolean',
            description: 'Show clear button',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CustomInput: Story = {
    args: {
        type: "text",
        clearable: true,
    },
};

