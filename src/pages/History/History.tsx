import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
import {HistoryRecord} from '../../types/HistoryRecord';

import styles from './History.module.css';

function History() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');

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
                    {searchHistory.map((historyItem: HistoryRecord) => {
                        const {query, timestamp, filteredItemCount, resultLink} = historyItem;

                        return (
                            <tr key={uuidv4()}>
                                <td>{timestamp}</td>
                                <td>{query}</td>
                                <td>{filteredItemCount}</td>
                                <td>
                                    <Link to={resultLink}>View</Link>
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
