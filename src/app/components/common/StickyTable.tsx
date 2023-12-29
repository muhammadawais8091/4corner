// packages Import
import { FC } from "react"
import { Paper, TableContainer, Table } from "@mui/material"
import { TableHeaderProps } from "../../interfaceTypes"

export const StickyTable: FC<TableHeaderProps> = ({ children, pagination, height }): JSX.Element => {
  const handleTable = (ref: HTMLDivElement | null) => {
    ref?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer ref={(ref) => handleTable(ref)} sx={{ height: height || "calc(100vh - 395px)" }}>
        <Table stickyHeader aria-label="sticky table">
          {children}
        </Table>
      </TableContainer>

      {pagination}
    </Paper>
  )
}