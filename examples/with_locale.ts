import { Fluent } from "../src/mod.ts";

void (async () => {
  const fluent = new Fluent();

  await fluent.addTranslation({
    locales: "en",
    source: (`welcome = Welcome!`),
  });

  // Use `withLocale()` method to create
  // translation function bound
  // to the specified locale:
  const translate = fluent.withLocale("en");

  console.log(
    translate("welcome"),
  );
})();
