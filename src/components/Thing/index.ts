import { Thing, ThingProps, DEFAULT_THING_TEXT } from './Thing'

// Default export: core component.
export default Thing

// Type exports: required otherwise you get the following webpack warning:
// | export 'ThingProps' (reexported as 'ThingProps') was not found in './Thing' (possible exports: DEFAULT_THING_TEXT, Thing)
// Some references:
// 1. https://github.com/webpack/webpack/issues/7378#issuecomment-492641148
// 2. https://github.com/webpack/webpack/issues/7378#issuecomment-683890375
export type { ThingProps }

// Other, named exports: consts, functions, etc.
export { DEFAULT_THING_TEXT }
