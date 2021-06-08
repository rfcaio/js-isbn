# About

> A simple ISBN handler.

## Usage

### `ISBN10`

Create an instance using `ISBN10` constructor.

```js
const isbn = new ISBN10('855080603X')
```

##### `format`

Returns a formated `ISBN10` instance value.

```js
isbn.format() // 85-508-0603-X
```

##### `value`

Returns an `ISBN10` instance value.

```js
isbn.value // 855080603X
```

### `ISBN13`

Create an instance using `ISBN13` constructor.

```js
const isbn = new ISBN13('9788550804606')
```

##### `format`

Returns a formated `ISBN13` instance value.

```js
isbn.format() // 978-85-508-0460-6
```

##### `value`

Returns an `ISBN13` instance value.

```js
isbn.value // 9788550804606
```
