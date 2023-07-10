import './CardList.css';
import {Card} from '../Card/Card';
import {AnimeData} from '../../types/state';

type CardListProps = {
    cards: AnimeData[];
};

// function CardList({cards}: CardsArray) {
//     const card = cards.map((item) => (
//         <li key={item}>
//             <Card
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 ranking={item.ranking}
//                 episodes={item.episodes}
//             />
//         </li>
//     ));
//     return <ul className="anime-list-wrp">{card}</ul>;
// }

function CardList({cards}: CardListProps) {
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
            />
        </li>
    ));

    return <ul className="anime-list-wrp">{cardList}</ul>;
}

export {CardList};
