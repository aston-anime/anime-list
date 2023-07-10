import styles from './Error.module.css';

function ErrorPage() {
    return (
        <div className={styles.container}>
            <h2>Oops! Something went wrong...</h2>
        </div>
    );
}

export {ErrorPage};
