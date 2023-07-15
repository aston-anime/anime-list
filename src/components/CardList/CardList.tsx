import PropTypes from 'prop-types';
import {Card} from '../Card/Card';
import {AnimeData} from '../../types/state';

import {SetFavoritesAnime} from '../../types/setFavorites';
import styles from './CardList.module.css';

type CardListProps = {
    cards: AnimeData[];
    setFavoritesAnime?: SetFavoritesAnime;
};

function CardList({cards = [], setFavoritesAnime}: CardListProps) {
    const cardList = cards?.map((item) => (
        <li key={item._id}>
            <Card
                id={item._id}
                title={item.title}
                image={item.image}
                ranking={item.ranking}
                episodes={item.episodes}
                setFavoritesAnime={setFavoritesAnime}
            />
        </li>
    ));

    return <ul className={`${styles.wrapper}`}>{cardList}</ul>;
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
