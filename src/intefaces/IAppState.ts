export interface IAppState {
  state?: DataState
  errorMessage?: String
}

export enum DataState {
  initial = 0,
  loading,
  loaded,
  error
}