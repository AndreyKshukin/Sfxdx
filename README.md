# Тестовое задание Sfxdx

Задача.

  - Смотри файл Тестовое_задание_на_позицию_Mobile_Frontend_Developer.docx

# Архитектура
    /* Тут должно расти дерево */
    
  - Приложение строится на паттерне State. Отталкиваясь расширяем приложение. 
  - Интерфейсы делятся на два типа ITodo и TodoModel. В TodoModel нет реализации логики, есть только поля.
  - Модели связанные с API реализуют интефрейс CommonModel или интерфейс наследованный от CommonModel.


Так же по стандарту:
  - В components лежат react-components. (В каждой папке лежит файл index и style)
  - Redux для редакса и т.д.
  - В каждом подкаталоге (interfaces, components...) лежит файл index где хранятся ссылки на объекты.

### API

Dillinger uses a number of open source projects to work properly:

* [api_character] - данные персонажей
* [api_img] - генерация аватара.



### Установка

Установка зависимостей.

```sh
$ npm install --global expo-cli
$ npm install

npm install --global expo-cli
```


### Todos

 - Не нашел подходящих запросов для реализации задачи из выбранного списка.
 - Поэтому скомбинировал из нескольких API

**Удачи!**

    

   [api_character]: <https://www.anapioficeandfire.com>
   [api_img]: <http://avatars.adorable.io/>
