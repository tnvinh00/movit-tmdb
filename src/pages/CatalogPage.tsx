import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hooks';
import { fetchCatalogList, fetchSearchList, fetchCatalogMore, fetchSearchMoreList } from 'redux/reducers/catalogReducer';
import CatalogCard from '../components/cards/catalogCard';
import MovieModel from 'models/movie.model';
import SearchInput from 'components/searchInput/searchInput';
import { MOVIETYPE, TVTYPE } from 'constants/apiConstant';
import Button from 'components/button/button';
import { useNavigate } from 'react-router-dom';

export type MovieType = typeof MOVIETYPE[keyof typeof MOVIETYPE];

export type TVsType = typeof TVTYPE[keyof typeof TVTYPE];

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { category, keyword } = useParams();

  const [typeList, setTypeList] = useState([]);
  const [type, setType] = useState<MovieType | TVsType>();

  const { data, isLoading, isLoadingMore, page, totalPage } = useAppSelector(state => state.catalog);

  useEffect(() => {
    const temp = Object.entries(category === 'movie' ? MOVIETYPE : TVTYPE).map(([key, value]) => ({
      key: key.replace('_', ' '),
      value
    }));
    setTypeList(temp);
    setType(category === 'movie' ? MOVIETYPE.POPULAR : TVTYPE.POPULAR);
  }, [category]);

  useEffect(() => {
    if (!type) return;
    if (!keyword) {
      dispatch(fetchCatalogList({
        category: category,
        type: type
      }));
    } else {
      dispatch(fetchSearchList({
        category: category,
        type: type,
        query: keyword
      }))
    }
  }, [category, keyword, type]);

  const handleSearch = (query: string) => {
    if (query.trim().length > 0) {
      navigate(`/${category}/search/${query}`);
    }
  };

  const onClickedLoadMore = () => {
    if (!type) return;
    if (!keyword) {
      dispatch(fetchCatalogMore({
        category: category,
        type: type,
        page: page + 1
      }));
    } else {
      dispatch(fetchSearchMoreList({
        category: category,
        type: type,
        query: keyword,
        page: page + 1
      }))
    }
  };

  return (
    <>
      <div className='flex items-center justify-center pt-52'>
        <SearchInput value={keyword} onSearch={handleSearch} className='w-[24rem] md:w-[32rem] lg:w-[40rem]' />
      </div>

      <div className="container flex flex-wrap py-12">
        <div className='w-full px-3 pb-8 flex flex-wrap'>
          {typeList.map((item) => (
            <span
              key={item.key}
              onClick={() => setType(item.value)}
              className={'px-5 py-3 my-2 cursor-pointer border-2 rounded-lg text-black dark:text-white mr-2 text-sm md:text-base ' + (type === item.value ? 'border-red-600 text-red-600 dark:text-red-500 font-bold' : 'shadow hover:shadow-md dark:hover:shadow-white')}
            >
              {item.key}
            </span>
          ))}
        </div>

        {data.map((item) => (
          <CatalogCard item={item} category={category} key={item.id} />
        ))}

        {page < totalPage && (
          <div className='w-full flex justify-center'>
            <Button
              color='primary'
              label='Load more'
              icon={<i className='bx bx-arrow-to-bottom ml-2'></i>}
              iconPosition='right'
              onClick={onClickedLoadMore}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default CatalogPage