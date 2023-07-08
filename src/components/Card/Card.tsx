function Card({image, title}) {
    return (
        <article className="card">
            <img className="card__img" src={image} alt={title} />
            <div className="card__ranking">5</div>
            <h2 className="card__title">{title}</h2>
            <button type="button" className="card__btn">
                Подробнее
            </button>
        </article>
    );
}

export {Card};
