import { IApiMethod } from '@intefaces'
import { CharacterModel, CharactersModel } from '@models'
import { routes } from '../routes'

//Получаем данные для персонажа
export const CharacterService: IApiMethod<CharacterModel> = {
  getAll: () => getAll(),
  searchData: (search: String) => searchData(search),
  fetchById: (dix: String) => fetchById(dix)
} 


//Запос данных по поиску
async function searchData(search: String): Promise<CharactersModel> {
  //TODO: В API не было реализации поиска
  return await getAll()
}


//Запос все персонажей
async function getAll(): Promise<CharactersModel> {
  try {
    const response = await fetch(routes.get_all);
    if (!response.ok) {
      throw new Error("Cannot get data");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}


//Запос для подробной информации о персонаже
async function fetchById(dix: String): Promise<CharacterModel | null> {
  try {
    const response = await fetch(routes.get_character + dix);
    if (!response.ok) {
      throw new Error("Cannot fetch data");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}