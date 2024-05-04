import {cn} from '@/helpers/tailwind';
import {cva, VariantProps} from 'class-variance-authority';
import React from 'react';

const paragraphVariants = cva('inline', {
  variants: {
    variant: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    fontWeight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    spacing: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      loose: 'leading-loose',
    },
  },
  defaultVariants: {
    variant: 'base',
    fontWeight: 'normal',
    spacing: 'normal',
  },
});

export type ParagraphProps = React.HtmlHTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof paragraphVariants> & {};

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  variant = 'base',
  children,
  spacing,
  fontWeight,
  ...props
}) => {
  return (
    <p className={cn(paragraphVariants({variant, className, spacing, fontWeight}))} {...props}>
      {children}
    </p>
  );
};
