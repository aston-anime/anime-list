import {AnimeWithId} from '../../types/animeData';
import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

export const getFavorites = (state: State): AnimeWithId[] => state[NameSpace.Favorite].favorites;
