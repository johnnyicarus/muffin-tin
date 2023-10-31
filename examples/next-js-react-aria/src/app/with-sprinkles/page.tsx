'use client';
import { useRef } from 'react';
import { Box as BaseBox } from '@muffin-tin/box';
import { withSprinkles } from '@muffin-tin/components';
import { Link as BaseLink } from 'react-aria-components';
import { boxSprinkles } from '../../components/layout/Box/Box.css';

export const Box = withSprinkles(BaseBox, boxSprinkles, 'Box');

export const Link = withSprinkles(BaseLink, boxSprinkles, 'Link');

export default function BoxPage() {
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
      <Box as="button" alignSelf="center" type="button"></Box>
      <Box as="button" alignSelf="center" ref={buttonRef}></Box>
      {/* @ts-expect-error incorrect ref */}
      <Box as="button" alignSelf="center" ref={linkRef}></Box>

      <Link target="_blank" padding={1}>
        Link to nowhere
      </Link>
      <Link href="/example" target="_blank" padding={1}>
        Link to nowhere
      </Link>
      <Link href="/example" target="_blank" padding={1} ref={linkRef}>
        Link to nowhere
      </Link>
      {/* @ts-expect-error incorrect ref */}
      <Link href="/example" target="_blank" padding={1} ref={buttonRef}>
        Link to nowhere
      </Link>
    </main>
  );
}
