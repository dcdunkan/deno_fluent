# Fluent for Deno <samp>[[better_fluent](https://deno.land/x/better_fluent)]</samp>

[Deno](https://deno.land/) port of
[the-moebius/fluent](https://github.com/the-moebius/fluent)

Better [Fluent](https://github.com/projectfluent/fluent.js) integration for
TypeScript/JavaScript. See the
[original repository](https://github.com/the-moebius/fluent) for more
information.

## Usage

```ts
import { Fluent } from "https://deno.land/x/better_fluent/mod.ts";

// Instantiate a Fluent class
const fluent = new Fluent();

// Add translations
await fluent.addTranslation({
  locales: "en",
  source: `
-brand-name = Super Project

welcome =
  Welcome, {$name}, to the {-brand-name}!
  Your balance is: {
    NUMBER($value, maximumFractionDigits: 2)
  }
  You have { NUMBER($applesCount) ->
    [0] no apples
    [one] {$applesCount} apple
    *[other] {$applesCount} apples
  }`,
});

const output = fluent.translate("en", "welcome", {
  name: "Slava",
  value: 100.12345,
  applesCount: 5,
});

console.log(output);
```

See more examples [here](/examples/).

## Credits

- [@slavafomin](https://github.com/slavafomin) - [original repository](https://github.com/the-moebius/fluent)
  (Node.js)
- [@roj1512](https://github.com/roj1512) - [deno port](https://github.com/roj1512/fluent) of
  [@fluent/bundle](https://github.com/projectfluent/fluent.js/tree/master/fluent-bundle)
  and
  [@fluent/langneg](https://github.com/projectfluent/fluent.js/tree/master/fluent-langneg)
