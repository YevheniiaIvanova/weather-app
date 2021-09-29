import React, { useState } from 'react';

import styles from './search-bar.module.scss';

type SearchBarProps = {
  setLocation: (location: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ setLocation }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const onSearchClickHandler = () => {
    if (searchValue) {
      setLocation(searchValue);
    }
  };

  const onKeypressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setLocation(searchValue);
    }
  };

  return (
    <div className={styles['search-bar']}>
      <input
        type="search"
        name=""
        id=""
        className={styles.input}
        onChange={onChangeHandler}
        onKeyPress={onKeypressHandler}
        value={searchValue}
      />
      <button
        type="button"
        className={styles.button}
        onClick={onSearchClickHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
