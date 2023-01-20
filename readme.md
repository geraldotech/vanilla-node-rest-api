# Vanilla Node REST API

### Updates by: gmap

- Add CORS support
- Add fetch page && and install fs [https://jsvanilla-node-api-way.onrender.com/fetch](https://jsvanilla-node-api-way.onrender.com/fetch)
- Routers
  - /deleter
  - /poster
  - /fetch

> Full CRUD REST API using Node.js with no framework

This is for learning/experimental purposes. In most cases, you would use something like Express in a production project

```
# Routes
GET      /api/products
POST     /api/products
GET      /api/products/:id
PUT      /api/products/:id
DELETE   /api/products/:id

```

## Usage

```
# Install dependencies
npm install
yarn install

# Run in develpment
npm run dev
yarn run dev

# Run in production
npm start
yarn start
```

Feel free to add to this and create a PR. I plan on creating a better router, but if you'd like to do that, feel free

Forked from [https://github.com/bradtraversy/vanilla-node-rest-api](https://github.com/bradtraversy/vanilla-node-rest-api)
