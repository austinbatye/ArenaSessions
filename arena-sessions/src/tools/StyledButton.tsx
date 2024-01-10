import { DefaultButton } from '@fluentui/react';
import { FunctionComponent } from 'react';
import cx from 'classnames';

import styles from './StyledButton.module.css';

/**
 * Props for the StyledButton component
 */
export interface StyledButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

/**
 * Blizzard styled button with optional props
 */
const StyledButton: FunctionComponent<StyledButtonProps> = (
  props
) => {
  const { className = '', text, onClick } = props;

  return (
    <DefaultButton
      className={cx(styles.main, className)}
      onClick={() => onClick?.()}
    >
      {text}
    </DefaultButton>
  );
};

export default StyledButton;
