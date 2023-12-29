import { PAGE_LIMIT } from "../constants";

export interface State {
  isOpen: boolean;
  isEdit: boolean;
  isInfoKey: boolean;
  isDeleteOpen: boolean;
  isLoading: boolean;
  isBrandLoading: boolean;
  searchValue: string | undefined;
  searchDataCount: number;
  totalDataCount: number;
  currentPage: number;
  dateFilter: string;
  pageLimit: number;
  entityType: string;
  toDateFilter: string;
  totalPageCount: number;
  filterDataCount: number;
  isBrandSettings: boolean;
  isTokenVerified: boolean;
  widgetLoader: boolean;
  isScript: boolean;
  isBackdropVisible: boolean,
  isInviteSuccess: boolean
}

export const initialState: State = {
  isOpen: false,
  isEdit: false,
  isInfoKey: false,
  isLoading: false,
  isBrandLoading: false,
  isBrandSettings: false,
  isTokenVerified: false,
  isDeleteOpen: false,
  searchValue: undefined,
  searchDataCount: 0,
  totalDataCount: 0,
  currentPage: 1,
  dateFilter: "",
  entityType: "",
  pageLimit: PAGE_LIMIT,
  toDateFilter: "",
  totalPageCount: 2,
  filterDataCount: 0,
  widgetLoader: false,
  isScript: false,
  isBackdropVisible: false,
  isInviteSuccess: false
}

export enum ActionType {
  SET_IS_OPEN = 'setIsOpen',
  SET_IS_EDIT = 'setIsEdit',
  SET_IS_INFO_KEY = 'setIsInfoKey',
  SET_IS_LOADING = 'setIsLoading',
  SET_IS_BRAND_LOADING = 'setIsBrandLoading',
  SET_IS_BRAND_SETTINGS = 'setisBrandSettings',
  SET_IS_TOKEN_VERIFIED = 'SetIsTokenVerified',
  SET_USER_ROLES = 'setUserRoles',
  SET_ROLES_DATA = 'setRolesData',
  SET_IS_DELETE_OPEN = 'setIsDeleteOpen',
  SET_SEARCH_VALUE = 'setSearchValue',
  SET_SEARCH_DATA_COUNT = 'setSearchDataCount',
  SET_TOTAL_DATA_COUNT = 'setTotalDataCount',
  SET_STATUS_FILTER = 'setStatusFilter',
  SET_CURRENT_PAGE = 'setCurrentPage',
  SET_DATE_FILTER = 'setDateFilter',
  SET_PAGE_LIMIT = "setPageLimit",
  SET_ENTITY_TYPE = 'setEntityType',
  SET_TO_DATE_FILTER = 'setToDateFilter',
  SET_TOTAL_PAGE_COUNT = "setTotalPageCount",
  SET_FILTER_DATA_COUNT = 'setFilterDataCount',
  SET_BRANDS_DATA = 'setBrandsData',
  SET_SELECTED_BRAND = 'setSelectedBrand',
  SET_WIDGET_LOADER = 'setWidgetLoader',
  SET_IS_SCRIPT = 'setIsScript',
  SET_IS_BACKDROP_VISIBLE = 'setIsBackdropVisible',
  SET_IS_INVITE_SUCCESS = 'setIsInviteSuccess',
}

export type Action =
  | { type: ActionType.SET_IS_OPEN, isOpen: boolean }
  | { type: ActionType.SET_IS_EDIT, isEdit: boolean }
  | { type: ActionType.SET_IS_INFO_KEY, isInfoKey: boolean }
  | { type: ActionType.SET_IS_DELETE_OPEN, isDeleteOpen: boolean }
  | { type: ActionType.SET_IS_LOADING, isLoading: boolean }
  | { type: ActionType.SET_IS_BRAND_LOADING, isBrandLoading: boolean }
  | { type: ActionType.SET_IS_BRAND_SETTINGS, isBrandSettings: boolean }
  | { type: ActionType.SET_IS_TOKEN_VERIFIED, isTokenVerified: boolean }
  | { type: ActionType.SET_SEARCH_VALUE, searchValue?: string }
  | { type: ActionType.SET_SEARCH_DATA_COUNT, searchDataCount: number }
  | { type: ActionType.SET_TOTAL_DATA_COUNT, totalDataCount: number }
  | { type: ActionType.SET_CURRENT_PAGE, currentPage: number }
  | { type: ActionType.SET_DATE_FILTER, dateFilter: string }
  | { type: ActionType.SET_PAGE_LIMIT, pageLimit: number }
  | { type: ActionType.SET_ENTITY_TYPE, entityType: string }
  | { type: ActionType.SET_TO_DATE_FILTER, toDateFilter: string }
  | { type: ActionType.SET_TOTAL_PAGE_COUNT, totalPageCount: number }
  | { type: ActionType.SET_FILTER_DATA_COUNT, filterDataCount: number }
  | { type: ActionType.SET_WIDGET_LOADER, widgetLoader: boolean }
  | { type: ActionType.SET_IS_SCRIPT, isScript: boolean }
  | { type: ActionType.SET_IS_BACKDROP_VISIBLE, isBackdropVisible: boolean }
  | { type: ActionType.SET_IS_INVITE_SUCCESS, isInviteSuccess: boolean }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case ActionType.SET_IS_BRAND_LOADING:
      return {
        ...state,
        isBrandLoading: action.isBrandLoading
      }

    case ActionType.SET_IS_BRAND_SETTINGS:
      return {
        ...state,
        isBrandSettings: action.isBrandSettings
      }

    case ActionType.SET_IS_TOKEN_VERIFIED:
      return {
        ...state,
        isTokenVerified: action.isTokenVerified
      }

    case ActionType.SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.isOpen
      }

    case ActionType.SET_IS_DELETE_OPEN:
      return {
        ...state,
        isDeleteOpen: action.isDeleteOpen
      }

    case ActionType.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      }

    case ActionType.SET_SEARCH_DATA_COUNT:
      return {
        ...state,
        searchDataCount: action.searchDataCount
      }

    case ActionType.SET_IS_EDIT:
      return {
        ...state,
        isEdit: action.isEdit
      }

    case ActionType.SET_IS_INFO_KEY:
      return {
        ...state,
        isInfoKey: action.isInfoKey
      }

    case ActionType.SET_TOTAL_DATA_COUNT:
      return {
        ...state,
        totalDataCount: action.totalDataCount
      }

    case ActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case ActionType.SET_DATE_FILTER:
      return {
        ...state,
        dateFilter: action.dateFilter
      }

    case ActionType.SET_PAGE_LIMIT:
      return {
        ...state,
        pageLimit: action.pageLimit
      }

    case ActionType.SET_ENTITY_TYPE:
      return {
        ...state,
        entityType: action.entityType
      }

    case ActionType.SET_TO_DATE_FILTER:
      return {
        ...state,
        toDateFilter: action.toDateFilter
      }

    case ActionType.SET_TOTAL_PAGE_COUNT:
      return {
        ...state,
        totalPageCount: action.totalPageCount
      }

    case ActionType.SET_FILTER_DATA_COUNT:
      return {
        ...state,
        filterDataCount: action.filterDataCount
      }

    case ActionType.SET_WIDGET_LOADER:
      return {
        ...state,
        widgetLoader: action.widgetLoader
      }

    case ActionType.SET_IS_SCRIPT:
      return {
        ...state,
        isScript: action.isScript
      }

    case ActionType.SET_IS_BACKDROP_VISIBLE:
      return {
        ...state,
        isBackdropVisible: action.isBackdropVisible
      }

    case ActionType.SET_IS_INVITE_SUCCESS:
      return {
        ...state,
        isInviteSuccess: action.isInviteSuccess
      }
  }
}
