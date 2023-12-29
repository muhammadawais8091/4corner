// packages block
import { FC, useState } from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
// styles, constants, utils and interfaces block
import { CustomControlProps, PasswordType } from '../../interfaceTypes';
import { InfoTooltip } from "./InfoTooltip"
import { ShowPassword } from './ShowPassword';
import { PASSWORD, TEXT } from '../../constants';

/**
 * It takes multiple params to show a customized input field which can have multiple types.
 *
 * @param {boolean} isDisabled - used for disabling custom field (multiple filed types e.g. password, text, email)
 * @param {string} controllerName - used for adding ID and name
 * @param {string} controllerLabel - used for adding label on textfield
 * @param {string} fieldType - used for showing selected options in select field
 * @param {isMultiLine} isMultiLine - used for showing text area
 * @returns JSX Element
 */

export const CustomController: FC<CustomControlProps> = ({ controllerName, controllerLabel, controllerPlaceholder, fieldType, isDisabled, isMultiLine, maxLength,
  rowsLength, readOnly, tooltipText, defaultValue, isPassword, min }): JSX.Element => {
  const { control } = useFormContext();
  const [passwordType, setPasswordType] = useState<PasswordType>(PASSWORD);
  const handleClickShowPassword = () => {
    if (passwordType === PASSWORD) {
      setPasswordType(TEXT);
    } else {
      setPasswordType(PASSWORD);
    }
  };

  return (
    <Controller
      name={controllerName}
      control={control}
      render={({ field, fieldState: { invalid, error: { message } = {} } }) => (
        <TextField
          {...field}
          type={fieldType === "password" ? passwordType : fieldType}
          margin='dense'
          error={invalid}
          label={controllerLabel}
          defaultValue={defaultValue}
          disabled={isDisabled}
          placeholder={controllerPlaceholder || ''}
          rows={isMultiLine ? rowsLength : undefined}
          fullWidth
          helperText={message}
          multiline={isMultiLine}
          variant="outlined"
          inputProps={{
            maxLength: maxLength || undefined,
            readOnly: readOnly ? true : false,
            min: min || 0,
          }}
          InputProps={tooltipText ? {
            endAdornment: <InfoTooltip title={tooltipText} />
          } : isPassword ? {
            endAdornment: <ShowPassword
              isPassword={isPassword}
              passwordType={passwordType}
              handleShowPassword={handleClickShowPassword}
            />
          } : undefined}
        />
      )}
    />
  );
};