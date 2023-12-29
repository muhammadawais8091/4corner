import { JobSummary, Maybe } from '../../generated';

export interface JobSummaryState {
  jobSummaryData?: Maybe<Array<Maybe<JobSummary>>>;
  keyword?: string;
  totalCount?: number;
}

export const jobSummaryInitialState: JobSummaryState = {
  jobSummaryData: [],
  keyword: '',
  totalCount: 0
};

export enum JobSummaryActionType {
  SET_JOB_SUMMARY_DATA = 'setJobSummaryData',
  SET_KEYWORD = 'setKeyword',
  SET_TOTAL_COUNT = 'setTotalCount'
}

export type JobSummaryAction =
  | { type: JobSummaryActionType.SET_JOB_SUMMARY_DATA; jobSummaryData: Maybe<Array<Maybe<JobSummary>>> }
  | { type: JobSummaryActionType.SET_KEYWORD; keyword: string }
  | { type: JobSummaryActionType.SET_TOTAL_COUNT; totalCount: number };

export const jobSummaryReducer = (state: JobSummaryState, action: JobSummaryAction): JobSummaryState => {
  switch (action.type) {
    case JobSummaryActionType.SET_JOB_SUMMARY_DATA:
      return {
        ...state,
        jobSummaryData: action.jobSummaryData
      };

    case JobSummaryActionType.SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      };

    case JobSummaryActionType.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      };
    default:
      return state;
  }
};
