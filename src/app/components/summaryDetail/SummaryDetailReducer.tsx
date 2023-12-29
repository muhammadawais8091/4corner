import { Attachment, JobSummary, StatusType } from "../../../generated";


export interface SummaryDetailsState {
  editableFile: boolean;
  isEditFile: boolean
  fileStatus: StatusType | undefined;
  currentJobSummary: JobSummary | null;
  inputSummaryFile: Attachment | null;
  outputSummaryFiles: Attachment[];
  signedUrl: string
  summaryText: string
  regenerateConfirmation: boolean;
}

export const initialState: SummaryDetailsState = {
  editableFile: false,
  isEditFile: false,
  fileStatus: undefined,
  currentJobSummary: null,
  inputSummaryFile: null,
  outputSummaryFiles: [],
  signedUrl: '',
  summaryText: '',
  regenerateConfirmation: false,
}

export enum SummaryDetailsActionType {
  SET_EDITABLE_FILE = 'setEditableFile',
  SET_IS_EDIT_FILE = 'setEditFile',
  SET_FILE_STATUS = 'setFileStatus',
  SET_CURRENT_JOB_SUMMARY = 'setCurrentJobSummary',
  SET_INPUT_SUMMARY_FILE = 'setInputSummaryFile',
  SET_OUTPUT_SUMMARY_FILE = 'setOutputSummaryFiles',
  SET_SIGNED_URL = 'setSignedUrl',
  SET_SUMMARY_TEXT = 'setSummaryText',
  SET_REGENERATE_CONFIRMATION = 'setRegenerateConfirmation',
}

export type SummaryDetailsAction =
  | { type: SummaryDetailsActionType.SET_EDITABLE_FILE, editableFile: boolean }
  | { type: SummaryDetailsActionType.SET_IS_EDIT_FILE, isEditFile: boolean }
  | { type: SummaryDetailsActionType.SET_FILE_STATUS, fileStatus: StatusType | undefined }
  | { type: SummaryDetailsActionType.SET_CURRENT_JOB_SUMMARY, currentJobSummary: JobSummary }
  | { type: SummaryDetailsActionType.SET_INPUT_SUMMARY_FILE, inputSummaryFile: Attachment }
  | { type: SummaryDetailsActionType.SET_OUTPUT_SUMMARY_FILE, outputSummaryFiles: Attachment[] }
  | { type: SummaryDetailsActionType.SET_SIGNED_URL, signedUrl: string }
  | { type: SummaryDetailsActionType.SET_SUMMARY_TEXT, summaryText: string }
  | { type: SummaryDetailsActionType.SET_REGENERATE_CONFIRMATION, regenerateConfirmation: boolean }


export const reducer = (state: SummaryDetailsState, action: SummaryDetailsAction): SummaryDetailsState => {
  switch (action.type) {
    case SummaryDetailsActionType.SET_EDITABLE_FILE:
      return {
        ...state,
        editableFile: action.editableFile
      }

    case SummaryDetailsActionType.SET_IS_EDIT_FILE:
      return {
        ...state,
        isEditFile: action.isEditFile
      }

    case SummaryDetailsActionType.SET_FILE_STATUS:
      return {
        ...state,
        fileStatus: action.fileStatus
      }

    case SummaryDetailsActionType.SET_CURRENT_JOB_SUMMARY:
      return {
        ...state,
        currentJobSummary: action.currentJobSummary
      }

    case SummaryDetailsActionType.SET_INPUT_SUMMARY_FILE:
      return {
        ...state,
        inputSummaryFile: action.inputSummaryFile
      }

    case SummaryDetailsActionType.SET_OUTPUT_SUMMARY_FILE:
      return {
        ...state,
        outputSummaryFiles: action.outputSummaryFiles
      }

    case SummaryDetailsActionType.SET_SIGNED_URL:
      return {
        ...state,
        signedUrl: action.signedUrl
      }

    case SummaryDetailsActionType.SET_SUMMARY_TEXT:
      return {
        ...state,
        summaryText: action.summaryText
      }

    case SummaryDetailsActionType.SET_REGENERATE_CONFIRMATION:
      return {
        ...state,
        regenerateConfirmation: action.regenerateConfirmation
      }
  }
}
