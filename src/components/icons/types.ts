import { SVGAttributes } from 'react';

export type SVGIconProps = SVGAttributes<SVGSVGElement> &
  ({ role: 'img'; alt: string } | { role: 'presentation'; alt?: never });
