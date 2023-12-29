import React, { ChangeEvent, FC } from 'react'
import { SearchDocumentField } from '../../theme/styleComponents';
import { InputAdornment, TextField } from '@mui/material';
import { SearchIcon } from '../../../assets/svgs';
import { customTheme } from '../../theme';

interface SearchProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<SearchProps> = ({ handleChange }) => {

  return (
    <SearchDocumentField>
      <TextField
        id="Search"
        placeholder="Search"
        type="text"
        autoComplete="off"
        size="small"
        onChange={handleChange}
        sx={{ minWidth: 350, [customTheme.breakpoints.down('sm')]: { width: '100%' } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </SearchDocumentField>
  );
};
