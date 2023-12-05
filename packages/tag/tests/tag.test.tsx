/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Tag } from '../src/tag';
import { useRef, type MouseEvent, forwardRef, useState } from 'react';

type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

test('renders as the correct HTML', async () => {
  // ARRANGE
  render(<Tag>div tag</Tag>);
  render(<Tag as="a">a tag</Tag>);
  render(<Tag as="button">button tag</Tag>);

  // ASSERT
  expect(screen.getByText('div tag')).toMatchInlineSnapshot(`
    <div>
      div tag
    </div>
  `);
  expect(screen.getByText('a tag')).toMatchInlineSnapshot(`
    <a>
      a tag
    </a>
  `);
  expect(screen.getByText('button tag')).toMatchInlineSnapshot(`
    <button>
      button tag
    </button>
  `);
});

const Child = () => {
  return <span>child</span>;
};

test('renders as the passed in component', async () => {
  render(<Tag as={Child}></Tag>);

  expect(screen.getByText('child')).toMatchInlineSnapshot(`
    <span>
      child
    </span>
  `);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TypeTest = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* @ts-expect-error incorrectProp should not be allowed */}
      <Tag incorrectProp>div 1</Tag>
      {/* @ts-expect-error rendered as a div per default, so has no href attr */}
      <Tag href="/foo">div 2</Tag>
      {/* @ts-expect-error rendered as a button, so has no href attr */}
      <Tag as="button" href="/foo">
        button 1
      </Tag>
      <Tag as="button" ref={buttonRef}>
        button 2
      </Tag>
      <Tag as="a" href="/foo">
        link 1
      </Tag>
      {/* @ts-expect-error accessing the wrong kind of ref */}
      <Tag as="a" ref={buttonRef}>
        link 2
      </Tag>
      <Tag
        as="button"
        // e should be inferred correctly
        onClick={(e) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          type test = Expect<Equal<typeof e, MouseEvent<HTMLButtonElement>>>;
        }}
      ></Tag>
      <Tag
        as="a"
        // e should be inferred correctly
        onClick={(e) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          type test = Expect<
            // @ts-expect-error incorrect MouseEvent used
            Equal<typeof e, MouseEvent<HTMLButtonElement>>
          >;
        }}
      ></Tag>
    </>
  );
};

const Custom = forwardRef(
  (
    props: { requiredProp: boolean },
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    return <a ref={ref} />;
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TypeTestCustom = () => {
  const correctRef = useRef<HTMLAnchorElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Tag as={Custom} requiredProp />
      <Tag
        as={Custom}
        // @ts-expect-error incorrectProp should not be allowed
        incorrectProp
      />
      {/* @ts-expect-error thisIsRequired is not being passed */}
      <Tag as={Custom} />
      <Tag as={Custom} ref={correctRef} requiredProp />
      <Tag
        as={Custom}
        // @ts-expect-error incorrect ref
        ref={wrongRef}
        thisIsRequired
      />
    </>
  );
};

const PassRefTestApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRef, setHasRef] = useState(false);

  return (
    <>
      <div ref={ref}>ref</div>;
      <button
        onClick={() => {
          setHasRef(!!ref.current);
        }}
      >
        button
      </button>
      <div data-testid="result">{hasRef ? 'success' : 'failure'}</div>
    </>
  );
};

test('passes a ref correctly', async () => {
  render(<PassRefTestApp />);

  await userEvent.click(screen.getByText('button'));
  await screen.findByTestId('result');

  expect(screen.getByTestId('result')).toHaveTextContent('success');
});
