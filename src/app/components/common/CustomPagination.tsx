// packages block
import { ChangeEvent, FC, useContext } from "react";
import { Box, Pagination } from "@mui/material";
// others block
import { AppContext } from "../../context/AppContext";
import { ActionType } from "../../context/AppContextReducer";
import { PaginationProps } from "../../interfaceTypes";

/**
 * It would render Dimensions listing page
 *
 * @returns JSX Element
 */
export const CustomPagination: FC<PaginationProps> = ({ loading }) => {
  const { totalPageCount, currentPage, dispatch } = useContext(AppContext)

  const handleChange = (_event: ChangeEvent<unknown> | null, newPage: number) => {
    dispatch({ type: ActionType.SET_CURRENT_PAGE, currentPage: newPage })
  };

  return (
    <Box display="flex" justifyContent="flex-end" pt={3} pb={3}>
      <Pagination
        color="primary"
        disabled={loading}
        count={totalPageCount}
        page={currentPage}
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  )
}