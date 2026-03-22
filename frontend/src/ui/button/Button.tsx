'use client';

import { Button as RACButton, type ButtonProps as RACButtonProps } from 'react-aria-components';

import { buttonRecipe } from './button.recipe';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends RACButtonProps {
  /** ボタンの見た目バリアント @default 'solid' */
  variant?: ButtonVariant;
  /** ボタンのサイズ @default 'md' */
  size?: ButtonSize;
}

export function Button({ variant = 'solid', size = 'md', className, ...props }: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={buttonRecipe({ variant, size }) + (className ? ` ${className}` : '')}
    />
  );
}
