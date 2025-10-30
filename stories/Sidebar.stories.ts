import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Sidebar from '@/app/components/Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    parameters: {
        layout: "left",
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        isOpen: { control: "boolean" },
    }
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const sidebarTestItems = [
    {
        title: 'First Field',
        callback: () => console.log('First Field callback')
    },
    {
        title: 'Second Field',
        callback: () => console.log('Second Field callback'),
        subItems: [
            {
                title: 'Second Field Submenu 1',
                callback: () => console.log('Second Field Submenu 1 callback'),
            },
            {
                title: 'Second Field Submenu 2',
                callback: () => console.log('Second Field Submenu 2 callback'),
            },
            {
                title: 'Second Field Submenu 2',
                callback: () => console.log('Second Field Submenu 3 callback'),
            }
        ]
    },
    {
        title: 'Third Field',
        callback: () => console.log('Third Field callback')
    },
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CustomSidebar: Story = {
    args: {
        isOpen: true,
        menuItems: sidebarTestItems
    },
};
