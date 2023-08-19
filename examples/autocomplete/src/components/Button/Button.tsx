import { Box, BoxProps } from '../Box/Box';

export const Button = (props: BoxProps<'button'>) => {
  return <Box {...props} as="button" />;
};

export const BadButton = (props: BoxProps<'button'>) => {
  return (
    <Box
      {...props}
      as="button"
      // @ts-expect-error no hrefs allowed on <button> elements (this will render to HTML tho, so don't ship it)
      href="/"
    />
  );
};
