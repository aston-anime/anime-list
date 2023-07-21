import {useNavigate, Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {useAppSelector} from '../../hooks';
import {HistoryRecord} from '../../types/HistoryRecord';

import {Button} from '../../components/Button/Button';

import {getHistory} from '../../store/history/selectors';
import styles from './History.module.css';

function History() {
    const navigate = useNavigate();
    const searchHistory = useAppSelector(getHistory);

    const backButtonHandler = () => {
        navigate('/anime-list');
    };

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
                                    <Link to={queryResultLink.split('&')[0]}>View</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Button onClick={backButtonHandler} variant="primary" className={styles.customButton}>
                ← Back
            </Button>
        </div>
    );
}

export {History};
