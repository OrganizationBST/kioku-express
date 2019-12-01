# kioku-express

Express end point.

# Setting up and installing

First, run `npm install` on this directory.

After that, go ahead and create a `.env` file in kioku-express. 

Inside there, it expects a `DB_LINK` variable to be set.

### Sample .env
```
# .env
DB_LINK=mongodb+srv://...
```

You can acquire the URL from any Mongo server. In our case, we use mongodb+srv since we are hosting the MongoDB on Atlas (thanks to its free tier).

# Documentation

## Routes

### Administrative
To use the administrative routes, you will need another key, known as `ADMIN_CODE` inside of your .env.
```
# .env
DB_LINK=mongodb+srv://...
ADMIN_CODE=whateveryouwant
```

*Substitute `ADMIN_CODE` with your own password.*
ALL POST requests expects `{ authorization: ADMIN_CODE }` inside of body in `x-www-form-urlencoded`

- **POST** /admin/deleteAllEntries
  - Deletes all entries in MongoDB.
- **POST** /admin/populateEntries
  - Initializes entries in MongoDB with a few initial decks and values.
    - _(Optional)_ you can pass in your own decks via `{ ...decks: [] }`.

### Standard
