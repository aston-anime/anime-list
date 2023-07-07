import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

export const getOnLogInPageFlag = (state: State): boolean => state[NameSpace.LogIn].onLogInPage;
