import { FC } from "react";
import { Box, Slide } from "@mui/material";
import { TabPanelProps } from "../../interfaceTypes";

export const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => (
  <Slide role="tabpanel" direction="left" hidden={value !== index} in={value === index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
    <Box>
      {value === index && (
        <Box>{children}</Box>
      )}
    </Box>
  </Slide>
);