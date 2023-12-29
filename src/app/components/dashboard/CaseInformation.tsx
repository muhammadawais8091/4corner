import { Box, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FC, useContext, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CaseInformationProps } from '../../interfaceTypes';
import { CustomController } from '../common/CustomController';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CustomModal } from '../common/CustomModal';
import { DocumentViewer } from './DocumentViewer';
import { AppContext } from '../../context';
import { ActionType } from '../../context/AppContextReducer';
import { TemplateType } from '../../../generated';
import { formatEnumMember, getTemplateUrl } from '../../utils';

export const CaseInformation: FC<CaseInformationProps> = ({ isChecked, setIsChecked, setTemplateValue }) => {
  const { control, setValue, watch } = useFormContext();
  const [disableViewIcon, setDisableViewIcon] = useState<boolean>(true)
  const { isOpen, dispatch } = useContext(AppContext)

  const templateValue = watch('summaryTemplate')

  const handleCheckedValue = async () => {
    setIsChecked(!isChecked)
    setValue('isConfidential', !isChecked)
  }

  const handleClose = () => {
    dispatch({ type: ActionType.SET_IS_OPEN, isOpen: false })
  }

  const handlePreviewTemplate = () => {
    dispatch({ type: ActionType.SET_IS_OPEN, isOpen: true })
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setDisableViewIcon(false);
    const value = event.target.value;
    getTemplateUrl(value as TemplateType)
    setTemplateValue(value as TemplateType)
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={6}>
          <CustomController controllerLabel={`Deponent's First Name`} controllerPlaceholder="First Name" controllerName={'deponentsFirstName'} />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <CustomController controllerLabel={`Deponent's Last Name`} controllerPlaceholder="Last Name" controllerName={'deponentsLastName'} />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <CustomController controllerLabel={`Deponent's Title`} controllerPlaceholder="Deponent's Title" controllerName={'deponentsTitle'} />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <Controller
            name="deponentsGender"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth sx={{ mt: 1 }} error={!!error?.message}>
                <InputLabel id="gender-label">Gender</InputLabel>

                <Select
                  {...field}
                  labelId="gender-label"
                  id="gender-select"
                  fullWidth
                  label="Gender"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>

                {error?.message && <FormHelperText sx={{ color: '#d32f2f' }}>{error?.message}</FormHelperText>}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <Controller
            name="depositionDate"
            control={control}
            render={({ field, fieldState: { error, invalid } }) => (
              <FormControl variant="outlined" error={!!error?.message} fullWidth sx={{ mt: '8px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...field}
                    label="Deposition date"
                    value={field.value}
                    onChange={(value) => { field.onChange(value); }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: 'outlined',
                        error: invalid,
                      },
                    }}
                  />
                </LocalizationProvider>

                {invalid && <FormHelperText sx={{ color: 'red' }}>Deposition Date is required</FormHelperText>}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <CustomController controllerLabel={'Case Number'} controllerPlaceholder="Case Number" controllerName={'caseNumber'} />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <CustomController controllerLabel={'Case Name'} controllerPlaceholder="Case Name" controllerName={'caseName'} />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <CustomController controllerLabel='Volume Number' controllerPlaceholder="Volume Number" controllerName={'volumeNumber'} />
        </Grid>

        <Grid item xs={12} md={6} sm={6}>
          <Box display='flex' alignItems='center' gap='6px'>
            <Controller
              name="summaryTemplate"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth sx={{ mt: 1 }} error={!!error?.message}>
                  <InputLabel id="summaryTemplate-label">Summary Template</InputLabel>

                  <Select
                    {...field}
                    labelId="summaryTemplate-label"
                    id="template-select"
                    fullWidth
                    label="Summary Template"
                    onChange={(event) => {
                      field.onChange(event)
                      handleSelectChange(event)
                    }}
                  >
                    <MenuItem value={TemplateType.TemplateA}>Template A</MenuItem>
                    <MenuItem value={TemplateType.TemplateB}>Template B</MenuItem>
                    <MenuItem value={TemplateType.TemplateC}>Template C</MenuItem>
                  </Select>

                  {error?.message && <FormHelperText sx={{ color: '#d32f2f' }}>{error?.message}</FormHelperText>}
                </FormControl>
              )}
            />

            <IconButton onClick={handlePreviewTemplate} disabled={disableViewIcon}>
              <VisibilityIcon sx={{ color: '#3498DB' }} />
            </IconButton>
          </Box>

        </Grid>
      </Grid>

      <Box mt='10px' maxWidth='calc(50% - 10px)'>
        <Controller
          name="isConfidential"
          control={control}
          defaultValue={false}
          render={({ }) => <FormControlLabel control={<Checkbox onChange={handleCheckedValue} checked={isChecked} />} label="Mark Confidential" />}
        />

        {!!isChecked &&
          <Controller
            name="confidentialValue"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth sx={{ mt: 2 }} error={!!error?.message}>
                <InputLabel id="dropdown-label">Select level</InputLabel>

                <Select
                  {...field}
                  labelId="dropdown-label"
                  id="dropdown-select"
                  fullWidth
                  label="Confidential Level"
                >
                  <MenuItem value="CONFIDENTIAL">Confidential</MenuItem>
                  <MenuItem value="HIGHLY_CONFIDENTIAL">Highly - Confidential</MenuItem>
                  <MenuItem value="ATTORNEYS_EYE_ONLY">Confidential - Attorney's Eyes only</MenuItem>
                </Select>

                {error?.message && <FormHelperText sx={{ color: '#d32f2f' }}>{error?.message}</FormHelperText>}
              </FormControl>
            )}
          />}
      </Box>

      <CustomModal maxWidth='1200px' isOpen={isOpen} handleClose={handleClose}>
        <Box sx={{ height: 'calc(100vh - 150px)' }}>
          <DocumentViewer
            url={getTemplateUrl(templateValue as TemplateType)}
            title={formatEnumMember(templateValue || "")}
            fileType='doc'
            handleClose={handleClose} />
        </Box>
      </CustomModal>
    </Box>
  );
};
