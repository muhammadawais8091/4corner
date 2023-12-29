// packages block
import { FC, useState, useEffect } from "react";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";
// styles, constants, utils and interfaces block
import PhoneInput from "react-phone-input-2";
import { CustomControlProps } from "../../interfaceTypes";
import { CustomPhoneContainer } from "../../theme/styleComponents";
import palette from "../../theme/palette";

/**
 * It takes multiple params to show a customized input field which can have multiple types.
 * 
 * @param {string} controllerName - used for adding ID and name
 * @param {string} controllerLabel - used for adding label on textfield
 * @param {string} error - used for showing errors if the field is not validated
 * @returns JSX Element
 */

export const CustomPhoneController: FC<CustomControlProps> = ({ controllerName, controllerLabel }): JSX.Element => {
  const { control, getValues } = useFormContext();
  const { pathname } = useLocation()
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    const phone = getValues()
    if ((pathname === "/create-case") && phone) {
      setFocus(true)
    }
  }, [pathname, getValues])

  return (
    <CustomPhoneContainer>
      <Controller
        name={controllerName}
        control={control}
        render={({ field: { value, onChange }, fieldState: { invalid, error: { message } = {} } }) => (
          <FormControl variant="outlined" fullWidth error={invalid}>
            <InputLabel shrink={true} id={`phone-${controllerName}`} sx={{ backgroundColor: `${palette.bodyBackground} !important` }}>{controllerLabel}</InputLabel>

            <PhoneInput
              country={'us'}
              onlyCountries={['us']}
              disableCountryCode={true}
              value={value}
              onChange={phone => {
                onChange(phone)
              }}
              dropdownClass={!focus ? "display_none" : undefined}
              onFocus={() => setFocus(() => true)}
              onBlur={() => {
                (value?.length === 0 || !value) &&
                  setFocus(false)
              }}
              placeholder=""
              inputClass={"appearance"}
              inputStyle={{
                backgroundColor: 'transparent',
                paddingLeft: 15,
                fontSize: 16,
                borderRadius: '4px',
                padding: '16.5px 14px',
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.2)'
              }}
            />

            {invalid && message &&
              <FormHelperText color="error">{message}</FormHelperText>
            }

          </FormControl>
        )}
      />
    </CustomPhoneContainer>
  );
};