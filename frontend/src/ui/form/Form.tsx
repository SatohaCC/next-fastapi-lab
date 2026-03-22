'use client';

import { type ReactNode } from 'react';
import { Form as RACForm, type FormProps as RACFormProps } from 'react-aria-components';

import { formContainer, formTitle, formMessageRecipe } from './form.recipe';

export interface FormProps extends RACFormProps {
  /** フォームのタイトル */
  title?: string;
}

export function Form({ title, className, children, ...props }: FormProps) {
  return (
    <>
      {title && <h2 className={formTitle}>{title}</h2>}
      <RACForm {...props} className={formContainer + (className ? ` ${className}` : '')}>
        {children}
      </RACForm>
    </>
  );
}

export interface FormMessageProps {
  children: ReactNode;
  type?: 'success' | 'error';
}

export function FormMessage({ children, type = 'success' }: FormMessageProps) {
  return <p className={formMessageRecipe({ type })}>{children}</p>;
}
