Everything in this dir is a typescript file exporting a single object of key-value pairs where keys are 2-letter state abbreviations and values are strings or numbers (must be renderable).

```ts
Data: Record<string, string | number>
```

Using typescript over JSON/static assets to leverage type-inference.

Might be best to load these dynamically/lazily etc, but the data is so small, I don't think theres a perceivable gain anywhere.

Ideally, get to a place where a data set can be dropped in here and the app will know how to handle it without additional code.
