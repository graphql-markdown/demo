---
id: schema
slug: /
title: Rick and Morty GraphQL API Documentation
sidebar_position: 0
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
sidebar_class_name: navbar__toggle
---

This documentation has been automatically generated using [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql) endpoint with following plugin configuration:

```yaml title=".graphqlrc"
schema: 'https://rickandmortyapi.com/graphql'
extensions:
  graphql-markdown:
    rootPath: ./docs
    baseURL: /
    homepage: static/index.md
    loaders:
      UrlLoader: '@graphql-tools/url-loader'
    docOptions:
      pagination: false
      toc: false
      index: true
    printTypeOptions:
      deprecated: group
```
