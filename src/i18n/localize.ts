import { languagePath, t } from './index';
// Translate at the JSX text boundary, before React renders, on both server and client.
// Never translate input values, identifiers, CSS, URLs, scripts or user-entered content.
const translateChildren = (children: unknown): unknown => typeof children === 'string' ? t(children) : Array.isArray(children) ? children.map(translateChildren) : children;
export function localizeProps(type: unknown, input: unknown) {
  const props = input as Record<string, unknown> | null;
  if (!props || ['script', 'style'].includes(String(type)) || props.translate === 'no') return props;
  const result: Record<string, unknown> = { ...props, children: translateChildren(props.children) };
  for (const key of ['alt', 'title', 'placeholder', 'aria-label']) if (typeof result[key] === 'string') result[key] = t(result[key] as string);
  if (type === 'a' && typeof result.href === 'string' && !result.hrefLang) result.href = languagePath(result.href);
  return result;
}
