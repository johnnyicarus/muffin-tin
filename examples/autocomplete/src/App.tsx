import { useRef } from 'react';
import {
  Background,
  Background2,
  Background3,
} from './components/Background/Background';
import { BadButton, Button } from './components/Button/Button';

function App() {
  const ref = useRef(null);
  return (
    <>
      {/* Rendered as a <button> */}
      <Button>Button</Button>
      {/* Sprinkles and className work correctly */}
      <Button color="tomato" className="button-special">
        Button
      </Button>
      {/* @ts-expect-error we have autocomplete on button types */}
      <Button type="sauce">Button</Button>
      {/* Button with type="submit" */}
      <Button type="submit">Button</Button>
      {/* Careful, buttons with bad attributes will render them if you bypass TypeScript */}
      <BadButton>Button</BadButton>
      {/* 
        Background component extends a base component with Sprinkles.
        Original props stay accessible
      */}
      <Background backgroundColor="hotpink" width={500}>
        Hello
      </Background>
      {/* hasClassName is not turned on: className will silently fail */}
      <Background backgroundColor="hotpink" className="test">
        Hello
      </Background>
      {/* Component with hasClassName: className be added */}
      <Background2 backgroundColor="hotpink" className="test">
        Hello
      </Background2>
      {/* We can also extend */}
      <Background3
        as="button"
        backgroundColor="hotpink"
        color="white"
        type="button"
        ref={ref}
      >
        Hello
      </Background3>
      <Background3
        as="button"
        backgroundColor="hotpink"
        color="white"
        // @ts-expect-error no hrefs on button allowed
        href="https://example.com"
        type="button"
      >
        Hello
      </Background3>
    </>
  );
}

export default App;
