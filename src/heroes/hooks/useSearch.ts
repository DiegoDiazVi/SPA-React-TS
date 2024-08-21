import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import type { SearchHook } from '../../types/types';
import { getHeroByName } from '../utils/getHeroresByName';
import { useForm } from './useForm';

export function useSearch(): SearchHook {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const { formState, onInputChange, onResetForm } = useForm({
    searchText: '',
  });

  const heroes = getHeroByName(q as string);

  const showError = heroes?.length === 0 && q !== '';
  const showSearch = q === '';

  const { searchText } = formState;

  const handleSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (searchText.trim().length === 0) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    onResetForm();
  };

  return {
    searchText,
    onInputChange,
    handleSearchSubmit,
    heroes,
    showError,
    showSearch,
  };
}
