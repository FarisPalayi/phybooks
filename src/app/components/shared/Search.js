import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../styles/components/Search.module.scss";
import { useDebouncedCallback } from "use-debounce";
import { titleCase } from "@/app/lib/utils";
import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";

export default function Search({ data, onClick }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const debouncedSearch = useDebouncedCallback((searchQuery) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredData);
  }, 300);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    if (query.trim() === "") {
      setSearchResults(data);
      return;
    }

    debouncedSearch(query);
  }, [query, data, debouncedSearch]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__bar}>
          <label htmlFor="search">
            <SearchIcon className={styles.search__icon} />
          </label>
          <input
            type="search"
            id="search"
            className={styles.search__input}
            onChange={handleSearch}
            ref={inputRef}
            placeholder="Search books..."
          />
          <button onClick={onClick} className={styles.search__close}>
            <CloseIcon />
          </button>
        </div>

        <ul className={styles.search__list}>
          {searchResults.length > 0 ? (
            searchResults.slice(0, 5).map((item, i) => (
              <li key={i} className={styles.search__item}>
                <Link
                  href={`/subject/${item.title}`}
                  className={styles.search__link}
                  onClick={onClick}
                >
                  {titleCase(item.title)}
                </Link>
              </li>
            ))
          ) : (
            <p className={styles.search__fallback}>No books are found</p>
          )}
        </ul>
      </div>
    </div>
  );
}
