# TODO

- Define locale keys
- In `AuthenticationPage.js`, add fields for API key, endoind and Project ID. Also validate then on login
- Write tests
- Code `implementation.tsx`
- Code `API.ts`

# Appwrite backend

An abstraction layer between the CMS and [Appwrite](https://appwrite.io/)

## Code structure

`Implementation` for [File Management System API](https://github.com/netlify/netlify-cms/tree/master/packages/netlify-cms-lib-util/README.md) based on `Api`.

`Api` - A wrapper for GitHub REST API.

`GraphQLApi` - `Api` with `ApolloClient`. [Api docs](https://docs.github.com/en/graphql) and [netlify docs](https://www.netlifycms.org/docs/beta-features/#github-graphql-api).

`AuthenticationPage` - uses [lib-auth](https://github.com/netlify/netlify-cms/tree/master/packages/netlify-cms-lib-auth/README.md) to facilitate OAuth and implicit authentication.

`scripts` - Folder for JS file generators, if any are required

Look at tests or source code for more info.
