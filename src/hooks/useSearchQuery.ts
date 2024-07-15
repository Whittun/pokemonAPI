import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useSearchQuery = (): [
  string,
  Dispatch<SetStateAction<string>>,
  boolean,
] => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoadStorage, setIsLoadStorage] = useState(false);

  useEffect(() => {
    if (!isLoadStorage) {
      setSearchValue(localStorage.getItem('search') || '');
      setIsLoadStorage(true);
    } else {
      localStorage.setItem('search', searchValue);
    }
  }, [searchValue, isLoadStorage]);

  return [searchValue, setSearchValue, isLoadStorage];
};
