export type ErrorData = {
    message?: string;
};

export type ErrorType = {
    status: number | string;
    data: ErrorData;
};
