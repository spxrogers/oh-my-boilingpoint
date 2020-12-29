import React from 'react'
import ReactDOM from 'react-dom'

import Thing, { ThingProps, DEFAULT_THING_TEXT } from '@components/Thing'

const props: ThingProps = {
  text: `${DEFAULT_THING_TEXT} :^)`,
}

ReactDOM.render(<Thing {...props} />, document.getElementById('root'))
