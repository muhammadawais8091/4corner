import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { CustomAccordionProps } from "../../interfaceTypes";
import { AccordionWrapper } from "../../theme/styleComponents";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CustomAccordion: FC<CustomAccordionProps> = ({ expanded, id, label, children, subHeading }) => (
  <AccordionWrapper>
    <Accordion defaultExpanded={expanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={id}>
        <Box>
          <Typography variant="subtitle1">{label}</Typography>

          {subHeading &&
            <Typography variant="h3" mb={2}>{subHeading}</Typography>
          }
        </Box>

      </AccordionSummary>

      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  </AccordionWrapper>
);