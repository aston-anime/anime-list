import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

export const getAuthStatus = (state: State): boolean => state[NameSpace.Auth].authorizationStatus;
export const getUserName = (state: State): string => state[NameSpace.Auth].userName;
