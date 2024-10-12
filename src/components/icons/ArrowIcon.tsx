import { SVGIconProps } from './types';

function ArrowIcon({ alt, ...rest }: SVGIconProps) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {alt && <title>{alt}</title>}
      <path
        d="M24.0004 8.49998V6.49998L2.55538 6.53098L6.87738 2.20698L5.46338 0.792984L0.877383 5.37898C0.31497 5.94157 -0.000976563 6.70449 -0.000976562 7.49998C-0.000976563 8.29548 0.31497 9.0584 0.877383 9.62098L5.46338 14.207L6.87738 12.793L2.61538 8.53098L24.0004 8.49998Z"
        className="fill-current"
      />
    </svg>
  );
}

export default ArrowIcon;
