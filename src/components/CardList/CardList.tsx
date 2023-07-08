import {Card} from '../Card/Card';
import './CardList.css';

function CardList({itemlist}) {
    const cards = itemlist.map((card) => (
        <li key={card.id}>
            <Card image={itemlist.image} title={itemlist.title} />
        </li>
    ));
    return <ul className="anime-list-wrp">{cards}</ul>;
}

export {CardList};
