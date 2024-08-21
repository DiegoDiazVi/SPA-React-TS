export type Publisher = 'DC Comics' | 'Marvel Comics';

export interface Hero {
  id: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export interface FormState {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
  formState: { [key: string]: string };
}

export interface SearchHook {
  searchText: string;
  onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  heroes: Hero[] | undefined;
  showError: boolean;
  showSearch: boolean;
}
