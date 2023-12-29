import { Box, Button, IconButton } from '@mui/material';
import { FC } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { AddIcon, TrashIcon } from '../../../assets/svgs';
import { PromptComponentInterface } from '../../interfaceTypes';
import { parentPromptsWrapper } from '../../theme/styleConstants';
import { CustomController } from '../common/CustomController';

export const Prompts: FC<PromptComponentInterface> = ({ isEdit }): JSX.Element => {
  const { control, watch } = useFormContext();
  const promptsValue = watch("prompts")
  const { fields, append: appendPromptFields, remove } = useFieldArray({ control: control, name: 'prompts' });

  const handleRemovePrompt = (indexToRemove: number) => {
    remove(indexToRemove);
  };

  return (
    <Box>
      <Box sx={{ mt: "10px" }}>
        {fields.length > 0 && ((promptsValue[0].prompt !== "") || isEdit) && fields.map((field, index) => (
          <Box key={`prompt-${field.id}`} sx={parentPromptsWrapper}>
            <Box maxWidth={600} width="100%">
              <CustomController isDisabled={!isEdit} controllerLabel={`Prompt ${index + 1}`} controllerPlaceholder="Add Prompt" controllerName={`prompts.${index}.prompt`} />
            </Box>

            {index > 0 && isEdit && (
              <IconButton onClick={() => handleRemovePrompt(index)} sx={{ marginLeft: '5px' }}>
                <TrashIcon />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>

      {isEdit && (
        <Button
          onClick={() =>
            appendPromptFields({
              prompt: ''
            })
          }
          startIcon={<AddIcon />}
          variant="outlined"
          color="primary"
          sx={{ fontWeight: '600', mt: '20px', borderRadius: '50px' }}
        >
          More Prompts
        </Button>
      )}
    </Box>
  );
};
