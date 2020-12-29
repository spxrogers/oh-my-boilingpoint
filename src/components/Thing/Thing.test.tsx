import React from 'react'
import { render, screen } from '@testing-library/react'
import Thing from './'

it('Thing does not have to shrug', () => {
  render(<Thing text="jesty test" />)

  const thing = screen.getByText(/jesty test/i)
  expect(thing).toBeTruthy()
})
