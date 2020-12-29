import React, { FC } from 'react'

export interface ThingProps {
    text?: string
}

export const DEFAULT_THING_TEXT = '¯\\_(ツ)_/¯'

/**
 * A custom Thing component. Rad!
 */
export const Thing: FC<ThingProps> = ({ text }: ThingProps) =>
    <h2>Thing: {text || DEFAULT_THING_TEXT}</h2>
