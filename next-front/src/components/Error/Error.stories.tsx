import type { StoryObj } from '@storybook/react'
import { Error } from './Error'

type Story = StoryObj<typeof Error>

export default { component: Error }

export const Default: Story = {
  args: { error: 'エラー' },
  render: (args) => <Error {...args} />
}
