import clsx from 'clsx';

import { SVGIconProps } from './types';

function LoadingIcon({ alt, className, ...rest }: SVGIconProps) {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('animate-spin-fast fill-current text-neutral-50', className)}
      {...rest}
    >
      {alt && <title>{alt}</title>}
      <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
    </svg>
  );
}

export default LoadingIcon;
