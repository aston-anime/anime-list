import {AnimeInfo} from '../../types/state';

type SearchResultsListProps = {
    results: AnimeInfo[] | null;
    maxResults: number;
};

function SearchResultsList({results, maxResults}: SearchResultsListProps) {
    const filteredResults = results?.slice(0, maxResults);
    return (
        <div className="search-results-list__wrp dropdown-menu show" style={{marginTop: '10px'}}>
            {filteredResults?.map((result) => (
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
