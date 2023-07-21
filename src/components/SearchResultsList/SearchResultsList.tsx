import cn from 'classnames';
import {Link} from 'react-router-dom';
import {AnimeWithId} from '../../types/animeData';

type SearchResultsListProps = {
    results: AnimeWithId[] | null;
    maxResults: number;
};

function SearchResultsList({results, maxResults}: SearchResultsListProps) {
    const filteredResults = results?.slice(0, maxResults);

    return (
        <div
            className={cn('search-results-list__wrp', 'dropdown-menu', {
                show: !!filteredResults?.length,
            })}
        >
            {filteredResults?.map((result) => (
                <Link
                    to={`/anime-list/detailed-item/${result.id}`}
                    className="dropdown-item"
                    key={result.id}
                >
                    {result.title}
                </Link>
            ))}
        </div>
    );
}

export {SearchResultsList};
