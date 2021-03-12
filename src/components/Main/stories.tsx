import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Default description'
  },
  argTypes: {
    title: { control: 'color' }
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Default: Story = (args) => <Main {...args} />

Default.args = {
  title: '123',
  description: '768'
}
