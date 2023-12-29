import { Breadcrumbs, Typography, Link } from '@mui/material'
import { FC } from 'react'
import { BreadCrumbProps } from '../../interfaceTypes'

export const CustomBreadCrumb: FC<BreadCrumbProps> = ({ currentPage, previousPage, href }) => (
  <Breadcrumbs sx={{ marginTop: 2, marginBottom: 2 }} aria-label="breadcrumb">
    <Link href={href} fontSize={14} underline="none">
      {previousPage}
    </Link>

    <Typography color="inherit" fontSize={14}>{currentPage}</Typography>
  </Breadcrumbs>
)
