'use client';

import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
  Input as RACInput,
  Label as RACLabel,
  FieldError as RACFieldError,
  Text as RACText,
  type ValidationResult,
} from 'react-aria-components';

import {
  textFieldContainer,
  labelStyle,
  inputRecipe,
  descriptionStyle,
  errorStyle,
} from './input.recipe';

export interface TextFieldProps extends RACTextFieldProps {
  /** ラベルテキスト */
  label?: string;
  /** 補足説明 */
  description?: string;
  /** エラーメッセージ */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /** プレースホルダー */
  placeholder?: string;
  /** バリデーションエラー状態 */
  invalid?: boolean;
}

export function TextField({
  label,
  description,
  errorMessage,
  placeholder,
  invalid = false,
  className,
  ...props
}: TextFieldProps) {
  return (
    <RACTextField
      {...props}
      isInvalid={invalid || props.isInvalid}
      className={textFieldContainer + (className ? ` ${className}` : '')}
    >
      {label && <RACLabel className={labelStyle}>{label}</RACLabel>}
      <RACInput
        className={inputRecipe({ invalid: invalid || !!props.isInvalid })}
        placeholder={placeholder}
      />
      {description && (
        <RACText slot="description" className={descriptionStyle}>
          {description}
        </RACText>
      )}
      <RACFieldError className={errorStyle}>{errorMessage}</RACFieldError>
    </RACTextField>
  );
}
