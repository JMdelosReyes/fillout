interface Question {
  id: string;
  name: string;
  type: string;
  value: string | number | null;
}

interface Calculation {
  id: string;
  name: string;
  type: string;
  value: string;
}

interface UrlParameter {
  id: string;
  name: string;
  value: string;
}

interface Quiz {
  score?: number;
  maxScore?: number;
}

interface Document { }

export interface Response {
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  questions: Array<Question>;
  calculations?: Array<Calculation>;
  urlParameters?: Array<UrlParameter>;
  quiz?: Quiz;
  documents?: Array<Document>;
}

export interface ResponsesWrapper {
  responses: Array<Response>;
  totalResponses: number;
  pageCount: number;
}