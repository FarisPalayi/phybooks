import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/Search.module.scss";
import { useDebouncedCallback } from "use-debounce";

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
      setSearchResults([]);
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
          <label for="search">
            <Image
              src="/images/search.svg"
              className={styles.search__icon}
              alt=""
              width={24}
              height={24}
            />
          </label>
          <input
            type="search"
            id="search"
            className={styles.search__input}
            onChange={handleSearch}
            ref={inputRef}
          />
          <button onClick={onClick} className={styles.search__close}>
            <Image src="/images/x.svg" alt="" width={24} height={24} />
          </button>
        </div>
        <ul className={styles.search__list}>
          {searchResults.map((item, i) => (
            <li key={i} className={styles.search__item}>
              <Link href={`/subject/${item.title}`} onClick={onClick}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
