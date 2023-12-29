import { Box, Typography } from "@mui/material"
import { FC } from "react"
import { useFormContext } from "react-hook-form"
import { PreviewProps } from "../../interfaceTypes"
import palette from "../../theme/palette"
import { customControllerBox, promptBox } from "../../theme/styleConstants"
import { formatFileSize } from "../../utils"
import { getFileIcon } from "../common/FileIcon"

export const Preview: FC<PreviewProps> = ({ files }) => {
  const { watch } = useFormContext()
  const promptsValues = watch('prompts')
  const { grayTwo, gray700 } = palette;

  return (
    <Box>
      <Typography variant="subtitle2">
        Preview of document alongside prompts in order to review first before generating AI based summary.
      </Typography>

      <Typography variant="h6" mt='20px'>
        Uploaded Document
      </Typography>

      {!!files.length && (
        <Box mt="8px" sx={{ border: '1px solid #E4E7EC', p: '16px', borderRadius: '8px' }}>
          {files.map((file) => {
            const { name, size } = file || {};
            return (
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box flex="1">
                  <Box sx={{ "svg": { width: '48px', height: '48px' }, display: "flex" }}>
                    {getFileIcon(name)}

                    <Box pl="10px" flex="1">
                      <Typography variant="subtitle2" sx={{ color: grayTwo }}>
                        {name}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ color: gray700, fontWeight: 500 }}>
                        {formatFileSize(size)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {promptsValues.length > 0 && promptsValues[0].prompt !== "" &&
        <>
          <Typography variant="h6" mt='20px'>
            Prompts
          </Typography>

          <Box sx={{ ...customControllerBox, maxHeight: 'calc(100vh - 636px)' }}>
            {promptsValues?.map((prompt: { prompt: string }, index: number) => (
              <Box sx={promptBox}>
                <Typography>{`${index + 1}-`}</Typography>
                <Typography variant="subtitle2">{prompt.prompt}</Typography>
              </Box>
            ))}
          </Box>
        </>
      }
    </Box>
  )
}