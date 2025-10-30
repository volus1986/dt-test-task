import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Toast from '@/app/components/Toast';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Toast',
    component: Toast,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        message: { control: "text" },
        duration: { control: "number" },
        closeButton: { control: "switch" },
    }
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultToast: Story = {
    args: {
        message: "text",
        duration: 3000,
        closeButton: false
    },
};

export const ClosableToast: Story = {
    args: {
        message: "text",
        duration: 3000,
        closeButton: true
    },
};