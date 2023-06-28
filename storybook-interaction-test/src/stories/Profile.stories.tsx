import { Meta, StoryObj } from '@storybook/react'
import { Profile } from './Profile'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof Profile> = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Profile'
}

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {}

// export const Link: Story = {
//     args: {
//       label: "Default",
//       "data-testid": "button",
//     },
//     play: async ({ canvasElement, step }) => {
//       const canvas = within(canvasElement);

//       await step("ボタンクリック時にuserの情報がセットされる", async () => {
//         await expect(canvas.getByText("Default")).toBeInTheDocument();
//       });
//     },
//   };
