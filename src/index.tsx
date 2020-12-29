import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

const Thing = React.lazy(() => import(/* webpackChunkName: "thing" */ '@components/Thing'))
import { ThingProps, DEFAULT_THING_TEXT } from '@components/Thing'
const Frown = React.lazy(() => import(/* webpackChunkName: "frown" */ '@components/Frown'))

const props: ThingProps = {
  text: `${DEFAULT_THING_TEXT} :^)`,
}

const componentToShow = Math.random() < 0.5 ? <Thing {...props} /> : <Frown />

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>{componentToShow}</Suspense>,
  document.getElementById('root')
)
