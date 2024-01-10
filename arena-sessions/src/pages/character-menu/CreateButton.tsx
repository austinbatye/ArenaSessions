import { FunctionComponent } from 'react';

import StyledButton from '@/tools/StyledButton';
import styles from './CreateButton.module.css';

/**
 * Props for the CreateButton component
 */
export interface CreateButtonProps {
  onCreate: () => void;
}

/**
 * Renders a styled button for creating a new character
 */
const CreateButton: FunctionComponent<CreateButtonProps> = (
  props
) => {
  const { onCreate } = props;
  return (
    <StyledButton
      onClick={onCreate}
      text={'Create new character'}
      className={styles.main}
    />
  );
};

export default CreateButton;
