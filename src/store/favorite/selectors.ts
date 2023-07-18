import {AnimeWithId} from '../../types/animeData';
import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

export const getFavoriteSelector = (state: State): AnimeWithId[] =>
    state[NameSpace.Favorite].favorite;
