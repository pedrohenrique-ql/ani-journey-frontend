'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  to: string;
}

/** Componente de redirecionamento */
function Redirect({ to }: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [router, to]);

  return null;
}

export default Redirect;
