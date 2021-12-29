# tmdb-fetch

unofficial small tmdb api client

get info of millions of movies and series from the public api of https://www.themoviedb.org/

this library provides functions to generate request links if you don't know api process

## Get started

you need a TMDB [account](www.themoviedb.org/account/signup) and
[api_key](https://www.themoviedb.org/settings/api), only one for user!

```html
<script src="https://unpkg.com/tmdb-fetch/dist/tmdb-fetch.min.js"></script>
<script>
  tmdb('<<api_key>>', { language: 'es-MX', include_adult: false })
    .movies()
    .search('toy story 4')
    .then(console.log)
    .catch(console.error)
</script>
```

## Usage

### install

```html
<script src="https://unpkg.com/tmdb-fetch/dist/tmdb-fetch.min.js"></script>
```

```js
import tmdb from 'tmdb-fetch'
```

### inicialize

#### single method chain

```js
tmdb('<<api_key>>', { include_adult: false }).movies().search('spiderman').then(render)
```

#### multiple config

```js
tmdb('<<api_key>>', { language: 'es-MX', include_adult: false })

const app1 = tmdb.movies() // spanish and no adult config inherited
const app2 = tmdb.tvSeries({ language: 'fr-FR' }) // spanish overloaded to french, no adult
const app3 = tmdb.movies({ with_genres: ['comedy'] }) // comedy in spanish
```

### send requests

#### search a movie

```js
// show user results of movies from an html input
const value = getValueAnyWay('#my-input')

app1.search(value).then(({ results }) => renderAnyWay(results))
```

#### discover movies

```js
// movies on cinemas at 2019
app3
  .discover({ primary_release_date: { gte: '2019-01-01', lte: '2019-12-31' } })
  .then(({ results }) => renderAnyWay(results))
```

#### full info about movie

```js
const annabelle3Info = await app1.findById(521029)
```

## Extra features

### image full url

```js
app3.findById(521029).then(({ title, poster_path, overview }) => {
  el.innerHTML = /*html*/ `
    <h3>${title}</h3>
    <img src="${tmdb.image(poster_path, 300)}"/>
    <p>${overview}</p>
  `
})
```

## Contribute

this library is small, i'll be happi of acept commits with more funcionality

create better documentation and copy-paste examples is also planned
