import {AnimeWithId} from '../../types/animeData';
import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFavoriteSelector = (state: State): AnimeWithId[] =>
    state[NameSpace.Favorite].favorite;
