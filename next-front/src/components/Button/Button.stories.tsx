// components/button/Button.stories.tsx
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled Button'
}
