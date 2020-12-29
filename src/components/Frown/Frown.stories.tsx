import React from 'react'
import { Story, Meta } from '@storybook/react'

import Frown from './'

export default {
    title: 'Components/Frown',
    component: Frown,
} as Meta

const Template: Story = args => <Frown {...args} />

export const Default = Template.bind({})
Default.args = {}