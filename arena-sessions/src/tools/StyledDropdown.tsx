import { FunctionComponent, useEffect, useState } from 'react';
import {
  Dropdown,
  IDropdownOption,
  IDropdownProps,
  SelectableOptionMenuItemType,
} from '@fluentui/react';

import styles from './StyledDropdown.module.css';

/**
 * Props for the StyledDropdown component
 */
export interface StyledDropdownProps {
  width?: number;
  className?: string;
  isRequired: boolean;
  label: string;
  options?: IDropdownOption[];
  optionValues?: string[];
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
}

/**
 * Custom styled component that renders a dropdown list
 */
const StyledDropdown: FunctionComponent<StyledDropdownProps> = (
  props
) => {
  const {
    width,
    options,
    className = '',
    isRequired,
    label,
    placeholder = '',
    value = '',
    optionValues,
    onChange,
  } = props;
  let menuOptions: IDropdownOption[] = [];

  if (optionValues != null && optionValues.length > 0) {
    const formattedValues = optionValues.map((o) => {
      return { key: o, text: o };
    });
    menuOptions = formattedValues;
  }

  if (options != null && options.length > 0) {
    menuOptions = options;
  }

  return (
    <Dropdown
      className={className}
      required={isRequired}
      label={label}
      onRenderLabel={(props, defaultRender) =>
        renderLabel(props, defaultRender)
      }
      styles={{
        title: { color: '#FFFFF', backgroundColor: '#1C241D' },
        root: { width: `${width ? `${width}px` : ''}` },
        dropdown: { color: '#FFFFF', backgroundColor: '#1C241D' },
        callout: { height: '200px', border: '1px solid #575958' },
      }}
      placeholder={placeholder}
      selectedKey={value}
      options={menuOptions}
      onChange={(e, v) => v && onChange?.(v.key.toString())}
      onRenderItem={(item, defaultRender) => {
        if (!item) {
          return null;
        }

        const isHeader =
          item.itemType === SelectableOptionMenuItemType.Header;
        return (
          <div
            className={!isHeader ? styles.item : styles.header}
            key={`${item.key} - ${menuOptions.indexOf(item)}`}
            style={{
              color: item.data?.color ?? '',
              paddingLeft: !isHeader ? '25px' : '',
              backgroundColor: '#1C241D',
            }}
            onClick={() => {
              if (!isHeader) {
                onChange?.(item.key.toString());
              }
            }}
          >
            {/* {defaultRender?.(item)} */}
            {item.text}
          </div>
        );
      }}
    />
  );

  /**
   * Custom rendered for the dropdown's label
   */
  function renderLabel(
    props: IDropdownProps | undefined,
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

export default StyledDropdown;
