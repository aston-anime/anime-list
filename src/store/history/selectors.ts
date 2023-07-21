import {HistoryRecord} from '../../types/HistoryRecord';
import {State} from '../../types/state';
import {NameSpace} from '../NameSpace';

export const getHistory = (state: State): HistoryRecord[] => state[NameSpace.History].history;
