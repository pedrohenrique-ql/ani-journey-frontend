import clsx from 'clsx';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';

import '@/styles/global.css';
import RootProvider from '@/app/providers/RootProvider';

const poppinsFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ani Journey',
    default: 'Ani Journey',
  },
  description: 'Acompanhe e compartilhe sua jornada de animes',
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={clsx('text-zinc-900', poppinsFont.className)}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

export default RootLayout;
