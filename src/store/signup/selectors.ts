import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

export const getOnSignUpPageFlag = (state: State): boolean => state[NameSpace.SignUp].onSignUpPage;
