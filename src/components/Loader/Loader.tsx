import * as LoaderSign from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loader}>
            <LoaderSign.Oval ariaLabel="loading-indicator" width="100vw" />{' '}
        </div>
    );
}

export {Loader};
