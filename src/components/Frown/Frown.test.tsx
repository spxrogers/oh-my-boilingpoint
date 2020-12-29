import React from 'react'
import { render, screen } from '@testing-library/react'
import Frown from './'

it('Better not be smiling', () => {
  render(<Frown />)

  const thing = screen.getByText(':(')
  expect(thing).toBeTruthy()
})
