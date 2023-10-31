'use client';
import { useRef } from 'react';
import { Box } from '@muffin-tin/box';

export default function BoxPage() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <main>
      <h1>Box Example Page</h1>
      {/* @ts-expect-error rendered as a div per default, no href attr */}
      <Box href="/example" />
      <Box as="a" href="/example"></Box>
      <Box as="a" href="/example" ref={linkRef}></Box>
      {/* @ts-expect-error incorrect ref */}
      <Box as="a" href="/example" ref={buttonRef}></Box>
      {/* @ts-expect-error button does not have href attribute */}
      <Box as="button" href="/example"></Box>
      <Box as="button" type="button"></Box>
      <Box as="button" ref={buttonRef}></Box>
      {/* @ts-expect-error incorrect ref */}
      <Box as="button" ref={linkRef}></Box>
    </main>
  );
}
