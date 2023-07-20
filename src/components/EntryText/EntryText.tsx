import {useContext} from 'react';
import cn from 'classnames';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import styles from './EntryText.module.css';

function EntryText() {
    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <h1 className={cn(styles.title, {'text-primary': theme === 'light'})}>
                Welcome to{' '}
                <span className={cn(styles.name, {'text-primary': theme === 'light'})}>
                    Euphoric Serenety!
                </span>
            </h1>
            <h4 className={styles.subtitle}>Database of top Anime</h4>
            <p className={styles.text}>
                Are you a fan of Anime? Look no further! Discover top anime titles and vibrant
                characters in our Catalogue! Start searching your favourite anime by keywords
            </p>
        </div>
    );
}

export {EntryText};
