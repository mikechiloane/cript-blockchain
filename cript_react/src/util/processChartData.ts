interface Values {
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
}

interface ProcessedData {
    time: string;
    open: number;
    close: number;
}

export function processValues(values: Values[]): ProcessedData[] {
    return values.map((value) => ({
        time: value.datetime,
        open: parseFloat(value.open),
        close: parseFloat(value.close),
    }));
}

