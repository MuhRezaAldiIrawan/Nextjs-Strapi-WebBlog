export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages];
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
    ];
};

export function flattenAttributes(data: any): any {
    // Base case for recursion
    if (!data) return null;

    // Handling array data
    if (Array.isArray(data)) {
        return data.map(flattenAttributes);
    }

    let flattened: { [key: string]: any } = {};

    // Handling attributes
    if (data.attributes) {
        for (let key in data.attributes) {
            if (typeof data.attributes[key] === "object" && data.attributes[key] !== null && "data" in data.attributes[key]) {
                flattened[key] = flattenAttributes(data.attributes[key].data);
            } else {
                flattened[key] = data.attributes[key];
            }
        }
    }

    // Copying non-attributes and non-data properties
    for (let key in data) {
        if (key !== 'attributes' && key !== 'data') {
            flattened[key] = data[key];
        }
    }

    // Handling nested data
    if (data.data) {
        flattened = { ...flattened, ...flattenAttributes(data.data) };
    }

    return flattened;
}