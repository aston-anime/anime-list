import {Card} from '../Card/Card';
import {AnimeData} from '../../types/state';

import './CardList.css';

type CardListProps = {
    cards: AnimeData[];
    // eslint-disable-next-line react/require-default-props, @typescript-eslint/no-explicit-any
    setFavoritesAnime?: any;
};

function CardList({cards = [], setFavoritesAnime}: CardListProps) {
    const updatedCards = cards.map((item) => {
        const {_id, ...rest} = item;
        return {id: _id, ...rest};
    });

    const cardList = updatedCards.map((item) => (
        <li key={item.id}>
            <Card
                _id={item.id}
                title={item.title}
                image={item.image}
                ranking={item.ranking}
                episodes={item.episodes}
                setFavoritesAnime={setFavoritesAnime}
            />
        </li>
    ));

    return <ul className="anime-list-wrp">{cardList}</ul>;
}

export {CardList};
