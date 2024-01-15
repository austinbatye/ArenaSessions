'use client';
import { FunctionComponent, useState } from 'react';

import StyledDialog from '@/tools/StyledDialog';

/**
 * Props for the DeleteCharacterDialog component
 */
export interface DeleteCharacterDialogProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

/**
 * Responsible for handling the delete character dialog menu
 */
const DeleteCharacterDialog: FunctionComponent<
  DeleteCharacterDialogProps
> = (props) => {
  const { isVisible, onClose, onSubmit } = props;

  const [prevIsVisible, setPrevIsVisible] = useState(isVisible);
  if (prevIsVisible != isVisible) {
    setPrevIsVisible(isVisible);
  }

  return (
    <StyledDialog
      isVisible={isVisible}
      title="Delete character"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <div>
        <div>Are you sure you want to delete this character?</div>
        <div>
          Deleting a character also results in all session data being
          deleted.
        </div>
        <br />
        <div>Confirm below to proceed with the deletion.</div>
      </div>
    </StyledDialog>
  );
};

export default DeleteCharacterDialog;
