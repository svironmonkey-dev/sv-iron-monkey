import { jsxDEV as base } from 'react/jsx-dev-runtime';
import { localizeProps } from './localize';
export { Fragment } from 'react/jsx-dev-runtime';
export type { JSX } from 'react/jsx-dev-runtime';
export const jsxDEV: typeof base = (type, props, key, staticChildren, source, self) => base(type, localizeProps(type, props), key, staticChildren, source, self);
