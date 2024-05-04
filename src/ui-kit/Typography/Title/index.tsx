import {cn} from '@/helpers/tailwind';
import {cva, VariantProps} from 'class-variance-authority';
import React from 'react';

const titleVariants = cva('scroll-m-20 inline', {
  variants: {
    variant: {
      h1: 'text-6xl',
      h2: 'text-5xl',
      h3: 'text-4xl',
      h4: 'text-3xl',
      h5: 'text-2xl',
      h6: 'text-xl',
    },
    fontWeight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    spacing: {
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      loose: 'tracking-wide',
    },
  },
  defaultVariants: {
    variant: 'h6',
    fontWeight: 'normal',
    spacing: 'normal',
  },
});

export type TitleProps = React.HtmlHTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

const variants: Record<Required<TitleProps>['variant'], React.FC<React.HTMLProps<HTMLHeadingElement>>> = {
  h1: ({children, ...props}) => <h1 {...props}>{children}</h1>,
  h2: ({children, ...props}) => <h2 {...props}>{children}</h2>,
  h3: ({children, ...props}) => <h3 {...props}>{children}</h3>,
  h4: ({children, ...props}) => <h4 {...props}>{children}</h4>,
  h5: ({children, ...props}) => <h5 {...props}>{children}</h5>,
  h6: ({children, ...props}) => <h6 {...props}>{children}</h6>,
};

export const Title: React.FC<TitleProps> = ({className, variant = 'h6', fontWeight, spacing, children, ...props}) => {
  const Component = variants[variant];
  return (
    <Component className={cn(titleVariants({variant, fontWeight, spacing, className}))} {...props}>
      {children}
    </Component>
  );
};
