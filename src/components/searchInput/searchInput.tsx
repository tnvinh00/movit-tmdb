import React, { useState } from 'react'

export interface ISearchInputProps {
  placeholder: string;
  value: string;
  buttonLabel: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  className?: string;
}

const SearchInput = (props: ISearchInputProps) => {
  const { placeholder, value, buttonLabel, onChange, onSearch, className } = props;
  const [inputValue, setInputValue] = useState(value);
  return (
    <>
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className={"relative " + className}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i className='bx bx-search-alt text-gray-400 dark:text-gray-500'></i>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
          }}
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch(e.currentTarget.value);
            }
          }}
        />
        <button
          type="submit"
          onClick={() => onSearch(inputValue)}
          className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          {buttonLabel}
        </button>
      </div>
    </>
  )
}

SearchInput.defaultProps = {
  placeholder: 'Search',
  value: '',
  buttonLabel: 'Search',
  onChange: () => { },
  onSearch: () => { },
  className: ''
}

export default SearchInput