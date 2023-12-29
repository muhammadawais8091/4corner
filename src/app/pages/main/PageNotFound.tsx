// package import
import { FC } from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
// other imports
import { ErrorBox, ErrorText, PageNotFountText } from '../../theme/styleComponents'
import { FOUR_O_FOUR, LOOKS_LIKE_AN_EMPTY_SPACE, PAGE_NOT_FOUND } from '../../constants'

export const PageNotFound: FC = (): JSX.Element => (
  <Container>
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection='column' height='100vh'>
      <ErrorText color="primary" align='center'>{FOUR_O_FOUR}</ErrorText>

      <ErrorBox>
        <PageNotFountText color="primary" variant="h1">
          {PAGE_NOT_FOUND}
        </PageNotFountText>

        <Box maxWidth={500} pt={1} pb={4} px='20px'>
          <Typography variant='body2' align='center'>
            {LOOKS_LIKE_AN_EMPTY_SPACE}
          </Typography>
        </Box>

        <Button variant="contained" color="primary" component={Link} to='/'>
          back
        </Button>
      </ErrorBox>
    </Box>
  </Container>
)
