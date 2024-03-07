import { ResponsesFetcher } from '@app/application/responses-fetcher';
import { ResponsesWrapper } from '@app/domain/response';
import { FormService } from '@app/domain/form-service';
import { Filter } from '@app/domain/filter';

describe('ResponsesFetcher', () => {
  let formService: FormService;
  let responsesFetcher: ResponsesFetcher;

  beforeEach(() => {
    formService = { getResponses: jest.fn()};
    responsesFetcher = new ResponsesFetcher(formService);
  });

  describe('applyFilters', () => {
    it('Equals filter > should have 0 responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'bE2Bo4cGUv49cjnqZ4UnkW',
                name: 'What is your name?',
                type: 'ShortAnswer',
                value: 'Johnny'
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'bE2Bo4cGUv49cjnqZ4UnkW',
          condition: 'equals',
          value: 'Frank'
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(0);
    });

    it('Equals filter > should have the same number of responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'bE2Bo4cGUv49cjnqZ4UnkW',
                name: 'What is your name?',
                type: 'ShortAnswer',
                value: 'Johnny'
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'bE2Bo4cGUv49cjnqZ4UnkW',
          condition: 'equals',
          value: 'Johnny'
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(1);
    });

    it('Does not equal filter > should have 0 responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'bE2Bo4cGUv49cjnqZ4UnkW',
                name: 'What is your name?',
                type: 'ShortAnswer',
                value: 'Johnny'
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'bE2Bo4cGUv49cjnqZ4UnkW',
          condition: 'does_not_equal',
          value: 'Johnny'
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(0);
    });

    it('Does not equal filter > should have the same number of responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'bE2Bo4cGUv49cjnqZ4UnkW',
                name: 'What is your name?',
                type: 'ShortAnswer',
                value: 'Johnny'
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'bE2Bo4cGUv49cjnqZ4UnkW',
          condition: 'does_not_equal',
          value: 'Frank'
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(1);
    });

    it('Greater than filter > should have 0 responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'fFnyxwWa3KV6nBdfBDCHEA',
                name: 'How many employees work under you?',
                type: 'NumberInput',
                value: 2
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'fFnyxwWa3KV6nBdfBDCHEA',
          condition: 'greater_than',
          value: 2
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(0);
    });

    it('Greater than filter > should have the same number of responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'fFnyxwWa3KV6nBdfBDCHEA',
                name: 'How many employees work under you?',
                type: 'NumberInput',
                value: 2
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'fFnyxwWa3KV6nBdfBDCHEA',
          condition: 'greater_than',
          value: 1
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(1);
    });

    it('Less than filter > should have 0 responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'fFnyxwWa3KV6nBdfBDCHEA',
                name: 'How many employees work under you?',
                type: 'NumberInput',
                value: 2
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'fFnyxwWa3KV6nBdfBDCHEA',
          condition: 'less_than',
          value: 2
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(0);
    });

    it('Less than filter > should have the same number of responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [
              {
                id: 'fFnyxwWa3KV6nBdfBDCHEA',
                name: 'How many employees work under you?',
                type: 'NumberInput',
                value: 2
              },
            ],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      const filters: Filter[] = [
        {
          id: 'fFnyxwWa3KV6nBdfBDCHEA',
          condition: 'less_than',
          value: 3
        }
      ];

      responsesFetcher.applyFilters(responseWrapperMock, filters);
      expect(responseWrapperMock.responses.length).toBe(1);
    });
  });

  describe('applyPagination', () => {
    it('Should have 1 response', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      responsesFetcher.applyPagination(responseWrapperMock, 150, 0);
      expect(responseWrapperMock.responses.length).toBe(1);
    });

    it('Should have 0 responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          }
        ],
        totalResponses: 1,
        pageCount: 1
      };

      responsesFetcher.applyPagination(responseWrapperMock, 150, 1);
      expect(responseWrapperMock.responses.length).toBe(0);
    });

    it('Should have 2 responses', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          },
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          },
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          }
        ],
        totalResponses: 3,
        pageCount: 1
      };

      responsesFetcher.applyPagination(responseWrapperMock, 2, 0);
      expect(responseWrapperMock.responses.length).toBe(2);
      expect(responseWrapperMock.totalResponses).toBe(3);
    });

    it('Should have 3 pages', () => {
      const responseWrapperMock: ResponsesWrapper = {
        responses: [
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          },
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          },
          {
            submissionId: 'ab9959b2-73e8-4994-85b9-56e780b89ce3',
            submissionTime: '2024-02-27T19:37:08.228Z',
            lastUpdatedAt: '2024-02-27T19:37:08.228Z',
            questions: [],
          }
        ],
        totalResponses: 3,
        pageCount: 1
      };

      responsesFetcher.applyPagination(responseWrapperMock, 1, 0);
      expect(responseWrapperMock.pageCount).toBe(3);
    });
  });
});
