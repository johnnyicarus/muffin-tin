'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { RouterProvider } from 'react-aria-components';

/*
 * This client provider component that sets up the react-aria
 * routing provider so that we get client-side navigation in
 * react-aria components
 *
 * See: https://react-spectrum.adobe.com/react-aria/routing.html#nextjs
 */
export function ClientProviders({ children }: { children?: ReactNode }) {
  let router = useRouter();

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
}
