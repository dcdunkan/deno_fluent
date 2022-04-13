import { Fluent } from "../src/mod.ts";
import type { Warning, WarningHandler } from "../src/mod.ts";

void (async () => {
  class MyWarningHandler implements WarningHandler {
    public handleWarning(warning: Warning): void {
      console.warn(
        `Houston, we got a problem!`,
        JSON.stringify(warning, null, 4),
      );
    }
  }

  const fluent = new Fluent({
    warningHandler: new MyWarningHandler(),
  });

  await fluent.addTranslation({
    locales: "en-GB",
    source: "",
  });

  // {welcome}
  console.debug(fluent.translate("en", "welcome"));
})();
