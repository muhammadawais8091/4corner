import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { UploadImageModalProps } from "../../interfaceTypes";
import { CustomModal } from "../common/CustomModal";
import { UploadCustomDocument } from "../common/UploadCustomDocument";
import { ACCEPT_FOR_IMAGES } from "../../constants";
import { AuthContext } from "../../context";

export const UploadImageModal: FC<UploadImageModalProps> = ({ isOpen, handleClose, entityType, typeId }) => {
  const { currentUser } = useContext(AuthContext)
  const { profilePicture } = currentUser ?? {}
  const { id, key} = profilePicture ?? {}

  return (
    <CustomModal
      title="Upload Image"
      isOpen={isOpen}
      handleClose={handleClose}
      maxWidth="700px"
    >
      <Box padding="0 0 20px">
        <UploadCustomDocument
          fileId={id || ""}
          fileKey={key}
          entityType={entityType}
          typeId={typeId || ""}
          metaType="avatarFile"
          type="user"
          accept={ACCEPT_FOR_IMAGES}
        />
      </Box>
    </CustomModal>
  )
}