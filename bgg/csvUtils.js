import Papa from 'papaparse';

// Function to read CSV data
export const readCSVData = (filePath) => {
    return new Promise((resolve, reject) => {
        Papa.parse(filePath, {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
                resolve(result.data);
            },
            error: (error) => {
                reject(error.message);
            },
        });
    });
};
