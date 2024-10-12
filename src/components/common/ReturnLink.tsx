import Link from 'next/link';

import ArrowIcon from '../icons/ArrowIcon';

interface Props {
  href: string;
}

function ReturnLink({ href }: Props) {
  return (
    <Link href={href} className="flex flex-row items-center space-x-2 transition-colors hover:text-surface-dark-700">
      <ArrowIcon role="presentation" className="mb-0.5 w-5" />
      <span>Voltar</span>
    </Link>
  );
}

export default ReturnLink;
