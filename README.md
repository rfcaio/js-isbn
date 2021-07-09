# About

> A simple ISBN handler.

## Usage

### `Isbn10`

Create an instance using `Isbn10` constructor.

```js
const isbn = new Isbn10('855080603X')
```

##### `format`

Returns a formated `Isbn10` instance value.

```js
isbn.format() // 85-508-0603-X
```

##### `value`

Returns an `Isbn10` instance value.

```js
isbn.value // 855080603X
```

### `Isbn13`

Create an instance using `Isbn13` constructor.

```js
const isbn = new Isbn13('9788550804606')
```

##### `format`

Returns a formated `Isbn13` instance value.

```js
isbn.format() // 978-85-508-0460-6
```

##### `value`

Returns an `Isbn13` instance value.

```js
isbn.value // 9788550804606
```
