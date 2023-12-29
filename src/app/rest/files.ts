import axios from "axios";
import { MetaTypeEnum, AttachmentEnum, UploadFileInput } from "../interfaceTypes";
import { getToken } from "../utils";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;
export const uploadFiles = async (uploadFileInput: UploadFileInput) => {
  const { files, jobSummaryId, status, fileId } = uploadFileInput
  try {
    const formData = new FormData();

    // Append files to FormData
    for (const file of files) {
      formData.append('files', file as unknown as Blob);
    }

    // Define the input fields and their corresponding values
    const inputFields: Record<string, string> = {
      status: status,
      metaType: MetaTypeEnum.INPUT_FILE,
      typeId: jobSummaryId,
      type: AttachmentEnum.JOB_SUMMARY
    };

    // Append input fields to FormData
    for (const field in inputFields) {
      if (inputFields[field] !== undefined) {
        formData.append(field, inputFields[field]);
      }
    }

    fileId && formData.append("id", fileId)

    // Make the POST request
    const token = getToken()
    const results = await axios.post(`${baseURL}/api/job-summaries/multiple`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    const { status: statusCode } = results

    if (statusCode === 201) {
      return results
    } else {
      return false
    }

  } catch (error) {
    console.error('Error uploading files:', error);
    return false
  }
}