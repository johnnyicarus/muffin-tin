import { forwardRef, type ElementRef, type ForwardedRef } from 'react';
import { BoxLinkReactAria, type BoxLinkReactAriaProps } from '../../layout/Box';
import {
  BoxButtonReactAriaProps,
  BoxButtonReactAria,
} from '../../layout/Box/button/BoxButtonReactAria/BoxButtonReactAria';

/*
 * A clickable
 */

export type ClickableReactAriaProps =
  | BoxLinkReactAriaProps
  | BoxButtonReactAriaProps;

const isLink = (
  props: ClickableReactAriaProps,
): props is BoxLinkReactAriaProps =>
  (props as any).href && !(props as any).activeClassName;

const isButton = (
  props: ClickableReactAriaProps,
): props is BoxButtonReactAriaProps => !(props as any).href;

function ClickableReactAria(
  props: ClickableReactAriaProps,
  ref: ForwardedRef<ElementRef<'a'>> | ForwardedRef<ElementRef<'button'>>,
) {
  if (isLink(props)) {
    return (
      <BoxLinkReactAria {...props} ref={ref as ForwardedRef<ElementRef<'a'>>} />
    );
  }
  return (
    <BoxButtonReactAria
      {...props}
      ref={ref as ForwardedRef<ElementRef<'button'>>}
    />
  );
}

const _ClickableReactAria = forwardRef(ClickableReactAria);
export { _ClickableReactAria as ClickableReactAria };
