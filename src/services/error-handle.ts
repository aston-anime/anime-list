import {toast} from 'react-toastify';

const HttpCode = {
    BadRequest: 400,
    TooMAnyRequests: 429,
    NotFound: 404,
};

// без any мы не можем работать с ошибкой
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandle = (error: any): void => {
    switch (error.status) {
        case HttpCode.BadRequest:
            toast.info(error.data.message);
            break;
        case HttpCode.TooMAnyRequests:
            toast.info('Too many requests! Use a new key');
            break;
        case HttpCode.NotFound:
            toast.info(error.data.message);
            break;
        default:
            toast.info(`Unknown error: ${error.data?.message}`);
    }
};
