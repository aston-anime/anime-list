import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
import {HistoryRecord} from '../../types/HistoryRecord';
import {useAppSelector} from '../../hooks';
import {getUserName} from '../../store/auth/selectors';
import {LocalStorageUtil} from '../../utils/LocalStorageUtil';

import styles from './History.module.css';

function History() {
    const user: string = useAppSelector(getUserName) || '';
    const searchHistory = LocalStorageUtil.getSearchHistory(user);

    return (
        <div className={styles.container}>
            <h3>Search History:</h3>{' '}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Query</th>
                        <th scope="col">Matches</th>
                        <th scope="col">Results</th>
                    </tr>
                </thead>
                <tbody>
                    {searchHistory.map((historyRecord: HistoryRecord) => {
                        const {query, timestamp, queryResultNumber, queryResultLink} =
                            historyRecord;

                        return (
                            <tr key={uuidv4()}>
                                <td>{timestamp}</td>
                                <td>{query}</td>
                                <td>{queryResultNumber}</td>
                                <td>
                                    <Link to={queryResultLink}>View</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export {History};
