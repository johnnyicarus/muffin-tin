'use client';
import { useRef } from 'react';
import { Tag } from '@muffin-tin/tag';
import { withSprinkles } from '@muffin-tin/with-sprinkles';
import { Link as BaseLink } from 'react-aria-components';
import { boxSprinkles } from '../../tokens/box.css';

export const Box = withSprinkles({
  Component: Tag,
  sprinklesFn: boxSprinkles,
  displayName: 'Box',
});

export const Link = withSprinkles({
  Component: BaseLink,
  sprinklesFn: boxSprinkles,
  displayName: 'Link',
});

export default function WithSprinklesPage() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <main>
      <h1>Box Example Page</h1>
      {/* @ts-expect-error rendered as a div per default, no href attr */}
      <Box href="/example" />
      <Box as="a" href="/example" padding={1}></Box>
      <Box as="a" href="/example" padding={1} ref={linkRef}></Box>
      {/* @ts-expect-error incorrect ref */}
      <Box as="a" href="/example" padding={1} ref={buttonRef}></Box>
      {/* @ts-expect-error button does not have href attribute */}
      <Box as="button" alignSelf="center" href="/example"></Box>
      <Box as="button" alignSelf="center" type="button" ref={buttonRef}>
        Button
      </Box>
      <Box
        as="button"
        alignSelf="center"
        onClick={() => console.log(buttonRef)}
      >
        Button clicky
      </Box>
      {/* @ts-expect-error incorrect ref */}
      <Box as="button" alignSelf="center" ref={linkRef}>
        Button
      </Box>

      <Link target="_blank" padding={1}>
        Link to nowhere
      </Link>
      <Link href="/example" target="_blank" padding={1}>
        Link to nowhere
      </Link>
      <Link href="/example" target="_blank" padding={1}>
        Link to nowhere
      </Link>
      {/* @ts-expect-error incorrect ref */}
      <Link href="/example" target="_blank" padding={1} ref={buttonRef}>
        Link to nowhere
      </Link>
    </main>
  );
}
