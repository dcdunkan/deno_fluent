import { Fluent, TranslationContext } from "../../src/mod.ts";

const TRANSLATIONS_PATH = `${Deno.cwd()}/examples/translation_files`;

void (async () => {
  // Instantiate a Fluent class
  const fluent = new Fluent();

  // Add as many translations as you need to your Fluent instance
  await fluent.addTranslation({
    locales: "en",
    filePath: `${TRANSLATIONS_PATH}/en.ftl`,
    bundleOptions: {
      useIsolating: false,
    },
  });

  await fluent.addTranslation({
    locales: "ru",
    filePath: [
      `${TRANSLATIONS_PATH}/ru-1.ftl`,
      `${TRANSLATIONS_PATH}/ru-2.ftl`,

      // We could overwrite previous messages
      `${TRANSLATIONS_PATH}/ru-3.ftl`,
    ],
    bundleOptions: {
      useIsolating: false,
    },
  });

  const context: TranslationContext = {
    name: "Slava",
    value: 100.12345,
    applesCount: 5,
  };

  console.log(
    fluent.translate("en", "welcome", context) + `\n\n`,
  );

  console.log(
    fluent.translate("ru", "welcome", context),
  );
})();
