'use client';
import { FunctionComponent, useState } from 'react';
import {
  IDropdownOption,
  SelectableOptionMenuItemType,
} from '@fluentui/react';

import { CreateCharacterRequest } from '@/pages/api/characters/create';
import {
  classSpecs,
  getClassFromSpec,
  getColor,
  getDeDupedSpec,
} from '@/utils';
import StyledDialog from '@/tools/StyledDialog';
import StyledDropdown from '@/tools/StyledDropdown';
import StyledInput from '@/tools/StyledInput';

/**
 * Props for the CreateCharacterDialog component
 */
export interface CreateCharacterDialogProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (character: CreateCharacterRequest) => void;
}

/**
 * Responsible for handling the create character dialog menu
 */
const CreateCharacterDialog: FunctionComponent<
  CreateCharacterDialogProps
> = (props) => {
  const { isVisible, onClose, onSubmit } = props;
  const [charClass, setCharClass] = useState('');
  const [spec, setSpec] = useState('');
  const [name, setName] = useState('');

  const [prevIsVisible, setPrevIsVisible] = useState(isVisible);
  if (prevIsVisible != isVisible) {
    setCharClass('');
    setSpec('');
    setName('');
    setPrevIsVisible(isVisible);
  }

  return (
    <StyledDialog
      isVisible={isVisible}
      submitText="Create"
      title="Create character"
      onClose={onClose}
      onSubmit={() => handleSubmit()}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <StyledInput
          width={250}
          placeholder="Enter name"
          isRequired={true}
          label="Name"
          value={name}
          onChange={(v) => setName(v)}
        />
        <StyledDropdown
          width={250}
          placeholder="Select Spec"
          label="Spec"
          value={spec}
          options={getSpecOptions()}
          isRequired
          onChange={(spec) => handleSpecChange(spec)}
        />
      </div>
    </StyledDialog>
  );

  function handleSpecChange(spec: string) {
    console.log(spec);
    const classFromSpec = getClassFromSpec(spec);

    setCharClass(classFromSpec);
    setSpec(spec);
  }

  function getSpecOptions(): IDropdownOption[] {
    let options: IDropdownOption[] = [];

    Array.from(classSpecs.keys()).forEach((cls) => {
      options.push({
        key: cls,
        text: cls,
        disabled: true,
        itemType: SelectableOptionMenuItemType.Header,
        data: {
          color: getColor(cls),
        },
      });

      classSpecs.get(cls)?.forEach((spc) => {
        const deDupedSpec = getDeDupedSpec(spc);
        options.push({
          key: spc,
          text: deDupedSpec,
          data: {
            color: getColor(spc),
          },
        });
      });
    });

    return options;
  }

  function handleSubmit() {
    onSubmit({ class: charClass, spec, name });
  }
};

export default CreateCharacterDialog;
