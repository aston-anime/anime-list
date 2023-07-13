import {Card} from '../Card/Card';
import {AnimeInfo} from '../../types/state';

import styles from './CardList.module.css';

type CardListProps = {
    cards: AnimeInfo[];
    // eslint-disable-next-line react/require-default-props, @typescript-eslint/no-explicit-any
    setFavoritesAnime?: any;
};

function CardList({cards = [], setFavoritesAnime}: CardListProps) {
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

    return <ul className={`${styles.wrapper}`}>{cardList}</ul>;
}

export {CardList};
