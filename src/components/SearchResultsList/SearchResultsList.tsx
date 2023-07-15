import cn from 'classnames';
import {AnimeData} from '../../types/state';

type SearchResultsListProps = {
    input: string;
    results: AnimeData[] | null;
    maxResults: number;
};

function SearchResultsList({input, results, maxResults}: SearchResultsListProps) {
    const filteredResults = results?.slice(0, maxResults);
    return (
        <div
            className={cn('search-results-list__wrp', 'dropdown-menu', {
                show: !!input,
            })}
            style={{marginTop: '10px'}}
        >
            {filteredResults?.map((result) => (
                <a
                    href={`/anime-list/detailed-item/${result._id}`}
                    className="dropdown-item"
                    key={result._id}
                >
                    {result.title}
                </a>
            ))}
        </div>
    );
}

export {SearchResultsList};
