import React from 'react'
import { Story, Meta } from '@storybook/react'

import Thing, { ThingProps, DEFAULT_THING_TEXT } from './'

export default {
  title: 'Components/Thing',
  component: Thing,
} as Meta

const Template: Story<ThingProps> = args => <Thing {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Smile = Template.bind({})
Smile.args = {
  text: ':)',
}

export const UsingDefaultConst = Template.bind({})
UsingDefaultConst.args = {
  text: DEFAULT_THING_TEXT,
}
