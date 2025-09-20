
export const fetchTickets = async (): Promise<any[]> => {
    try {
        const response = await fetch('/api/tickets');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};


export const fetchCategories = async (): Promise<any[]> => {
    try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};


export const fetchWards = async (): Promise<any[]> => {
    try {
        const response = await fetch('/api/wards');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching wards:', error);
        throw error;
    }
};
