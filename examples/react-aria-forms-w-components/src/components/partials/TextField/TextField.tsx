import { Input, InputProps } from 'react-aria-components';
import { BoxSprinkles, boxSprinkles } from '../../layout/Box/Box.css';
import { ForwardedRef, forwardRef } from 'react';

export interface TextFieldProps
  extends BoxSprinkles,
    Omit<InputProps, 'color' | 'size' | 'width' | 'height'> {}

// Options for marrying Sprinkles (and other vanilla-extract features) with
// react-aria *components*
// 1) Reimplement the react-aria component (copy from their GitHub I guess).
// This is using the hooks as escape hatch, we are not really in Component-land
// anymore. Also even this humble <Input> component is pretty complex already
// 2) Add the sprinkles to the component props, filter them out so you can
// add them to the className with extractAtomsFromProps (this is what is hinted
// at below basically)
// 3) Use createDerivedComponent which basically abstracts away the above
// procedure (for better and worse)
// PS: Doing 2) a few more times might help to learn more in case there's typing
// issues when doing 3)

function TextField(
  { className, padding, width, height, size, ...props }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <Input
      {...props}
      ref={ref}
      className={`${boxSprinkles({
        padding,
        width,
        height,
        size,
      })} ${className}`}
    />
  );
}

/**
 * An input allows a user to input text.
 */
const _TextField = forwardRef(TextField);
export { _TextField as TextField };
