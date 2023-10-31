import { usePathname, useRouter } from 'next/navigation';

import React, { PropsWithChildren, useState, useEffect } from 'react';
import { Link, LinkProps } from 'react-aria-components';

export type ActiveLinkReactAriaProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    activeClassName?: string;
  };

const ActiveLinkReactAria = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkReactAriaProps>) => {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === props.href && activeClassName
          ? `${className} ${activeClassName}`
          : className
      }
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLinkReactAria;
