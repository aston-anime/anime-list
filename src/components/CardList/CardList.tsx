import PropTypes from 'prop-types';
import {Card} from '../Card/Card';

import {SetFavoritesAnime} from '../../types/setFavorites';
import {AnimeWithId} from '../../types/animeData';
import styles from './CardList.module.css';

type CardListProps = {
    cards: AnimeWithId[] | null;
    setFavoritesAnime?: SetFavoritesAnime;
};

function CardList({cards, setFavoritesAnime}: CardListProps) {
    const cardList = cards?.map((item) => (
        <li key={item.id}>
            <Card
                id={item.id}
                title={item.title}
                image={item.image}
                ranking={item.ranking}
                episodes={item.episodes}
                setFavoritesAnime={setFavoritesAnime}
            />
        </li>
    ));

    return <ul className={styles.wrapper}>{cardList}</ul>;
}

CardList.defaultProps = {
    cards: null,
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            ranking: PropTypes.number.isRequired,
            episodes: PropTypes.number.isRequired,
        })
    ),
    setFavoritesAnime: PropTypes.func.isRequired,
};

export {CardList};
