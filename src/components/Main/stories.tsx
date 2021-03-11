import { withKnobs, text } from '@storybook/addon-knobs'
import { Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic = () => (
  <Main
    title={text('Title', 'First title')}
    description={text('Description', 'First Description')}
  />
)
