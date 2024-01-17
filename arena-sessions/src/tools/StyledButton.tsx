import { DefaultButton } from '@fluentui/react';
import { FunctionComponent } from 'react';
import cx from 'classnames';

import styles from './StyledButton.module.css';
import { randomUUID } from 'crypto';

/**
 * Props for the StyledButton component
 */
export interface StyledButtonProps {
  className?: string;
  isPrimary?: boolean;
  text: string;
  onClick?: () => void;
}

/**
 * Blizzard styled button with optional props
 */
const StyledButton: FunctionComponent<StyledButtonProps> = (
  props
) => {
  const { className = '', isPrimary = false, text, onClick } = props;

  return (
    <DefaultButton
      className={cx(
        isPrimary ? styles.primary : styles.default,
        className
      )}
      onClick={() => onClick?.()}
    >
      {text}
    </DefaultButton>
  );
};

export default StyledButton;
