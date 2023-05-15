import { useState } from "react";
import { getDrinksBySearchTerm } from "../services/CocktailService";
import { Link } from "react-router-dom";
import { slugify } from "../utils/stringUtils";

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const onSubmit = async (e) => {
    if (isSearching) {
      return;
    }
    e.preventDefault();
    setResults([]);
    setIsSearching(true);
    const drinks = await getDrinksBySearchTerm(searchTerm);
    setResults(drinks);
    setIsSearching(false);
  };

  return (
    <>
      <form onSubmit={onSubmit} action="#">
        <input
          type="search"
          placeholder="Search drinks"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {isSearching ? <progress></progress> : null}

      {!isSearching ? (
        <>
          {results.length > 0 ? (
            <>
              <small>
                {results.length} results for "{searchTerm}"
              </small>
              <article>
                {results.map((x) => (
                  <p key={x.name}>
                    <hgroup>
                      <h4>
                        <Link to={`/drink/${x.id}`}>{x.name}</Link>
                      </h4>
                      <h5>
                        <Link to={`/category/${slugify(x.category)}`}>
                          {x.category}
                        </Link>
                      </h5>
                    </hgroup>
                  </p>
                ))}
              </article>
            </>
          ) : (
            <article>No results.</article>
          )}
        </>
      ) : null}
    </>
  );
};

export default Search;
