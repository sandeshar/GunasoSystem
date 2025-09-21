import { fetchTickets, fetchCategories, fetchWards } from '../src/utils/fetchData';

// Mock fetch
global.fetch = jest.fn();
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('fetchData utilities', () => {
    beforeEach(() => {
        mockFetch.mockClear();
    });

    describe('fetchTickets', () => {
        it('successfully fetches tickets from API', async () => {
            const mockTickets = [
                { id: 1, title: 'Test ticket 1', status: 'Open' },
                { id: 2, title: 'Test ticket 2', status: 'Closed' }
            ];

            mockFetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockTickets,
            } as Response);

            const result = await fetchTickets();

            expect(mockFetch).toHaveBeenCalledWith('/api/tickets');
            expect(result).toEqual(mockTickets);
        });

        it('handles API errors gracefully', async () => {
            mockFetch.mockRejectedValueOnce(new Error('Network error'));

            await expect(fetchTickets()).rejects.toThrow('Network error');
        });

        it('handles non-ok responses', async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
                status: 404,
                statusText: 'Not Found',
            } as Response);

            await expect(fetchTickets()).rejects.toThrow('HTTP error! status: 404');
        });
    });

    describe('fetchCategories', () => {
        it('successfully fetches categories from API', async () => {
            const mockCategories = [
                { id: 1, name: 'Water and Sanitation' },
                { id: 2, name: 'Infrastructure' }
            ];

            mockFetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockCategories,
            } as Response);

            const result = await fetchCategories();

            expect(mockFetch).toHaveBeenCalledWith('/api/categories');
            expect(result).toEqual(mockCategories);
        });

        it('handles fetch errors', async () => {
            mockFetch.mockRejectedValueOnce(new Error('Server error'));

            await expect(fetchCategories()).rejects.toThrow('Server error');
        });
    });

    describe('fetchWards', () => {
        it('successfully fetches wards from API', async () => {
            const mockWards = [
                { id: 1, name: 'Ward 1' },
                { id: 2, name: 'Ward 2' }
            ];

            mockFetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockWards,
            } as Response);

            const result = await fetchWards();

            expect(mockFetch).toHaveBeenCalledWith('/api/wards');
            expect(result).toEqual(mockWards);
        });

        it('handles HTTP errors', async () => {
            mockFetch.mockResolvedValueOnce({
                ok: false,
                status: 500,
                statusText: 'Internal Server Error',
            } as Response);

            await expect(fetchWards()).rejects.toThrow('HTTP error! status: 500');
        });
    });

    describe('error handling', () => {
        it('logs errors to console', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            mockFetch.mockRejectedValueOnce(new Error('Test error'));

            await expect(fetchTickets()).rejects.toThrow('Test error');

            expect(consoleSpy).toHaveBeenCalledWith('Error fetching tickets:', expect.any(Error));

            consoleSpy.mockRestore();
        });
    });
});