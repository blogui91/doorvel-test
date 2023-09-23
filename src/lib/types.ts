export interface PaginationInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ApiResponse<T> {
  info: PaginationInfo;
  results: T[];
}
