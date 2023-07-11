import {AnimeData} from '../../types/state';

type SearchResultsListProps = {
    listedResults: AnimeData[] | null;
};

function SearchResultsList({listedResults}: SearchResultsListProps) {
    const updatedList = listedResults?.map((item) => {
        const {_id, ...rest} = item;
        return {id: _id, ...rest};
    });
    return (
        <div className="search-results-list__wrp dropdown-menu show" style={{marginTop: '10px'}}>
            {updatedList?.slice(0, 5).map((result) => (
                <a
                    href={`/anime-list/detailed-item/${result.id}`}
                    className="dropdown-item"
                    key={result.id}
                >
                    {result.title}
                </a>
            ))}
        </div>
    );
}

export {SearchResultsList};
