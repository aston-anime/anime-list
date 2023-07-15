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
            <h4>Database of top Anime</h4>
            <p className={styles.text}>
                Are you a fan of Anime? Look no further! Our Anime Catalogue is your go-to
                destination for exploring a wide range of captivating and popular anime titles.
                Immerse yourself in a world of vibrant characters, stunning visuals, and captivating
                storylines that will leave you spellbound.
            </p>
            <p className={cn(styles.text_search, {'text-primary': theme === 'light'})}>
                Start searching your favourite anime by keywords or genres
            </p>
        </div>
    );
}

export {EntryText};
