'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useMemo } from 'react';

import APIProvider from './api/APIProvider';

type Props = PropsWithChildren;

function RootProvider({ children }: Props) {
  const queryClient = useMemo(() => {
    return new QueryClient();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <APIProvider>{children}</APIProvider>
    </QueryClientProvider>
  );
}

export default RootProvider;
