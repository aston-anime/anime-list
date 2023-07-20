import cn from 'classnames';
import {AnimeWithId} from '../../types/animeData';

type SearchResultsListProps = {
    input: string;
    results: AnimeWithId[] | null;
    maxResults: number;
};

function SearchResultsList({input, results, maxResults}: SearchResultsListProps) {
    const filteredResults = results?.slice(0, maxResults);
    return (
        <div
            className={cn('search-results-list__wrp', 'dropdown-menu', {
                show: !!input,
            })}
        >
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
