import { Box, Grid, Skeleton, Typography } from "@mui/material"

export const CaseInformationSkeleton = () => (
  <Grid container spacing={2} rowSpacing={2}>
    <Grid item md={4} sm={12} xs={12}>
      <Box display="flex" flexDirection="column">
        <Typography variant='body2' textTransform="capitalize" mt='10px'>Deponent's Name</Typography>

        <Box display='flex' alignItems='center' alignContent='center' mt='5px'>
          <Skeleton variant="text" width={120} height={30} />
        </Box>
      </Box>
    </Grid>

    <Grid item md={4} sm={12} xs={12}>
      <Box display="flex" flexDirection="column">
        <Typography variant='body2' textTransform="capitalize" mt='10px'>Deponent's Gender</Typography>

        <Box display='flex' alignItems='center'>
          <Skeleton variant="text" width={120} height={30} />
        </Box>
      </Box>
    </Grid>


    <Grid item md={4} sm={12} xs={12}>
      <Box display="flex" flexDirection="column">
        <Typography variant='body2' textTransform="capitalize" mt='10px'>Level of Confidentiality</Typography>

        <Box display='flex' alignItems='center'>
          <Skeleton variant="text" width={120} height={30} />
        </Box>
      </Box>
    </Grid>

    <Grid item md={4} sm={12} xs={12}>
      <Box display="flex" flexDirection="column">
        <Typography variant='body2' textTransform="capitalize" mt='10px'>Case Name</Typography>

        <Box display='flex' alignItems='center'>
          <Skeleton variant="text" width={120} height={30} />
        </Box>
      </Box>
    </Grid>

    <Grid item md={4} sm={12} xs={12}>
      <Box display="flex" flexDirection="column">
        <Typography variant='body2' textTransform="capitalize" mt='10px'>Case Number</Typography>

        <Box display='flex' alignItems='center'>
          <Skeleton variant="text" width={120} height={30} />
        </Box>
      </Box>
    </Grid>

    <Grid item md={4} sm={12} xs={12}>
      <Box display="flex" flexDirection="column">
        <Typography variant='body2' textTransform="capitalize" mt='10px'>Volume Number</Typography>

        <Box display='flex' alignItems='center'>
          <Skeleton variant="text" width={120} height={30} />
        </Box>
      </Box>
    </Grid>
  </Grid>
)
