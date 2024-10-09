import clsx from 'clsx';
import { ComponentProps, ForwardedRef, forwardRef, ReactNode } from 'react';

export interface InputClassNameOptions {
  className?: string;
  rounded?: string;
  readOnly?: boolean;
  ringOnFocus?: `focus:ring-${string}`;
  shadowOnFocus?: `focus:shadow-${string}` | null;
}

interface Props extends ComponentProps<'input'> {
  label: string;
  labelAsPlaceholder?: boolean;
  leftContent?: ReactNode;
  errorMessage?: string;
  className?: string;
}

function Input(
  { label, labelAsPlaceholder, leftContent, placeholder, errorMessage, className, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const hasLeftContent = leftContent !== undefined && leftContent !== null;

  return (
    <div className={className}>
      <label>
        <span className={clsx('mb-2', labelAsPlaceholder && 'sr-only')}>{label}</span>

        <div className="relative">
          {hasLeftContent && (
            <span className="absolute inset-y-0 left-4 flex items-center text-sm sm:text-base">{leftContent}</span>
          )}

          <input
            ref={ref}
            placeholder={labelAsPlaceholder ? label : placeholder}
            className="right-10 w-full rounded-md bg-surface-dark-700 p-3 text-sm ring-1 ring-surface-dark-400 transition-shadow placeholder:text-surface-dark-400 hover:ring-2 hover:ring-surface-dark-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 sm:p-4 sm:text-base"
            {...rest}
          />
        </div>
      </label>

      {errorMessage && (
        <p role="alert" aria-label={errorMessage} className="mt-1 block text-right text-sm text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default forwardRef(Input);
