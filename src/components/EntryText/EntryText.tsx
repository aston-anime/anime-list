import './EntryText.css';

function EntryText() {
    return (
        <div className="entry-text__wrp">
            <h1 className="entry-text__title">
                Welcome to <span style={{color: 'white'}}>Euphoric Serenety!</span>
            </h1>
            <h4>Database of top Anime</h4>
            <p className="entry-text__txt">
                Are you a fan of Anime? Look no further! Our Anime Catalogue is your go-to
                destination for exploring a wide range of captivating and popular anime titles.
                Immerse yourself in a world of vibrant characters, stunning visuals, and captivating
                storylines that will leave you spellbound.
            </p>
            <p className="entry-text__txt_search">
                Start searching your favourite anime by keywords or genres
            </p>
        </div>
    );
}

export {EntryText};
