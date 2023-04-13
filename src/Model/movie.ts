export interface Movie {
    count: number;
    next: string;
    previous?: null;
    results?: (ResultsEntity)[] | null;
  }
  export interface ResultsEntity {
    title: string;
    description: string;
    genres: string;
    uuid: string;
  }
  