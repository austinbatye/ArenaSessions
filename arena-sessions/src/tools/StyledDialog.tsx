import { FunctionComponent } from 'react';

import StyledButton from './StyledButton';
import styles from './StyledDialog.module.css';

/**
 * Props for the StyledDialog component
 */
export interface StyledDialogProps {
  children?: any;
  isVisible: boolean;
  title: string;
  submitText?: string;
  onClose: () => void;
  onSubmit: () => void;
}

/**
 * Component responsible for displaying the a styled dialog popup
 */
const StyledDialog: FunctionComponent<StyledDialogProps> = (
  props
) => {
  const {
    children,
    isVisible,
    submitText,
    title,
    onClose,
    onSubmit,
  } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.background} onClick={onClose} />
      <div className={styles.main}>
        <div className={styles.header}>{title}</div>
        <div className={styles.body}>
          <div className={styles.children}>{children}</div>
        </div>
        <div className={styles.footer}>
          <StyledButton
            className={styles.buttonPadding}
            isPrimary={true}
            text={submitText ?? 'Submit'}
            onClick={onSubmit}
          />
          <StyledButton
            className={styles.buttonPadding}
            text="Cancel"
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
};

export default StyledDialog;
