import {AnimeWithId} from '../types/state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renameIdsInData = (data: any[]): AnimeWithId[] =>
    data?.map((item) => {
        const {_id, ...rest} = item;
        return {...rest, id: _id} as AnimeWithId;
    });

export {renameIdsInData};
