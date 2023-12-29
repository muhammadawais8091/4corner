import { FC } from "react";
import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";
import { TableSkeletonProps } from "../../interfaceTypes";

/**
 * It would render Skelton on Table
 *
 *
 * @returns JSX Element DimensionTableSkeleton
 */
export const DashboardSkeleton: FC<TableSkeletonProps> = ({ noOfRows }) => (
  <TableBody>
    {new Array(noOfRows).fill(0).map((_, index) => (
      <TableRow key={`${index}-skeleton`}>
        <TableCell>
          <Skeleton variant="text" width={80} height={30} />
          <Skeleton variant="text" width={100} height={30} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={120} height={30} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={120} height={30} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={50} height={30} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" height={30} width={70} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" height={30} width={60} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={70} height={30} sx={{ margin: 'auto' }} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={50} height={30} sx={{ margin: 'auto' }} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={50} height={30} sx={{ margin: 'auto' }} />
        </TableCell>

        <TableCell>
          <Skeleton variant="text" width={50} height={30} sx={{ margin: 'auto' }} />
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);