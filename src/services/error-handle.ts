import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';

const HttpCode = {
    BadRequest: 400,
    TooMAnyRequests: 429,
    NotFound: 404,
};

export const errorHandle = (error: unknown): void => {
    if (error) {
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
    }
};
