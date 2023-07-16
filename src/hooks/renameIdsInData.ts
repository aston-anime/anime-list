import {AnimeInfo} from '../types/state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renameIdsInData = (data: any[]): AnimeInfo[] =>
    data?.map((item) => {
        const {_id, ...rest} = item;
        return {...rest, id: _id} as AnimeInfo;
    });
