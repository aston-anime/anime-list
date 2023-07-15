import {Button} from './Button';
import type {Meta, StoryObj} from '@storybook/react';
import '../../index.css';
import '../../bootstrap.min.css';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант цвета',
            defaultValue: 'primary',
            options: [
                'primary',
                'secondary',
                'success',
                'info',
                'warning',
                'danger',
                'light',
                'dark',
                'link',
            ],
            control: {
                type: 'radio',
            },
        },
        children: {
            type: 'string',
            name: 'label',
            defaultValue: 'Click me',
        },
    },
};

// обязательно нужен дефолтный экспорт
// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
};

export const Large: Story = {
    args: {
        ...Default.args,
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        ...Default.args,
        size: 'sm',
    },
};
