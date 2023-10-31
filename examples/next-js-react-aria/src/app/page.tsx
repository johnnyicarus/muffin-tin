'use client';
import ActiveLinkReactAria from '../components/active-links/ActiveLinkReactAria/ActiveLinkReactAria';
import { ClickableReactAria } from '../components/clickable/ClickableReactAria';
import { Box, BoxLinkReactAria } from '../components/layout/Box';
import { BoxButtonReactAria } from '../components/layout/Box/button/BoxButtonReactAria';
import { Flex, Flex2 } from '../components/layout/Flex';

/*
 * We are using this basic next.js app to test some concepts
 *
 */

export default function Home() {
  return (
    <main>
      <h1>External Links</h1>
      <Box padding={4}>foo</Box>
      <Flex padding={4} gap={4}>
        foo
      </Flex>
      <Flex alignItems="center"></Flex>
      <Flex2 paddingBlock={2} />
      <Box as="a" href="/foo" padding={4}>
        Fooooo
      </Box>
      <a href="/wooga">Woo Ga</a>
      <BoxLinkReactAria paddingInline={4} href="/example" display="block">
        Goo Ga
      </BoxLinkReactAria>
      <BoxLinkReactAria href="/" paddingInline={4} display="block">
        Home
      </BoxLinkReactAria>
      <BoxLinkReactAria
        href="/"
        activeClassName="foo"
        paddingInline={4}
        display="block"
      >
        Home
      </BoxLinkReactAria>
      <ActiveLinkReactAria href="/" activeClassName="foo">
        Home Active
      </ActiveLinkReactAria>
      <BoxLinkReactAria href="/" paddingInline={4} display="block">
        Home
      </BoxLinkReactAria>
      <BoxLinkReactAria paddingInline={4} target="_blank" display="block">
        GoNo Ga
      </BoxLinkReactAria>
      <BoxButtonReactAria onPress={() => console.log('Pressed')}>
        Press me
      </BoxButtonReactAria>
      <Box as="button" padding={4} />
      {/* <Clickable padding={1} to="/example">
        Link as Box with padding
      </Clickable>
      <Clickable asLayout="flex" padding={1} to="/example">
        Link as Flex with padding
        <div></div>
      </Clickable> */}

      <ClickableReactAria href="/example">
        Clickable as link to <code>/example</code>
      </ClickableReactAria>
      <ClickableReactAria onPress={() => console.log('Pressed')}>
        Log Button Presses
      </ClickableReactAria>
    </main>
  );
}
