export function composeClassNames(
  ...classNames: (string | null | undefined)[]
) {
  const classes = classNames.filter((className) => {
    if (typeof className === 'string') {
      className = className.trim();
    }
    return className;
  });
  return classes.length === 0 ? undefined : classes.join(' ');
}
