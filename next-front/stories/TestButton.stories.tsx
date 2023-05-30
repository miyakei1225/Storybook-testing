import { Meta, StoryObj } from '@storybook/react'
import TestButton from 'src/components/ui-elements/Button/TestButton'

// storyのmetadataをdefault export
export default {
  // コンポーネントのタイトル(任意)
  title: 'components/ui-elements/Button/TestButton',
  // 実際に使用するコンポーネント（上でimportしたもの）
  component: TestButton,
  argTypes: {}
} as Meta<typeof TestButton>

export const Default: StoryObj<typeof TestButton> = {
  args: {
    text: 'test text',
    color: 'red'
  }
}
