import { ITextFieldProps, TextField } from '@fluentui/react';
import { FunctionComponent } from 'react';

import styles from './StyledInput.module.css';

/**
 * Props for the StyledInput component
 */
export interface StyledInputProps {
  width?: number;
  className?: string;
  isRequired: boolean;
  placeholder?: string;
  label: string;
  value?: string;
  onChange?: (val: string) => void;
}

/**
 * Blizzard styled input with optional props
 */
const StyledInput: FunctionComponent<StyledInputProps> = (props) => {
  const {
    width,
    className = '',
    isRequired,
    label,
    placeholder = '',
    value = '',
    onChange,
  } = props;

  return (
    <TextField
      className={className}
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={(e, v) => onChange?.(v ?? '')}
      onRenderLabel={(props, defaultRender) =>
        renderLabel(props, defaultRender)
      }
      styles={{
        field: { color: '#FFFFF', backgroundColor: '#1C241D' },
        fieldGroup: {
          border: '1px solid #575958',
        },
        root: { width: `${width ? `${width}px` : ''}` },
      }}
    />
  );

  /**
   * Customer rendered for the input label
   */
  function renderLabel(
    props: ITextFieldProps | undefined,
    defaultRender: any
  ): JSX.Element {
    return (
      <div className={styles.label}>
        {label}
        {isRequired && <span> *</span>}
      </div>
    );
  }
};

export default StyledInput;
