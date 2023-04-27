export function composeClassNames(
  ...classNames: (string | null | undefined)[]
) {
  return classNames.filter((className) => className).join(' ');
}
