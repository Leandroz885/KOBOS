export const DELAYED_CLASSNAME = "fragment";

export function createClassNames(
  classNames: Array<string | undefined>,
  delayed?: boolean
) {
  const result = [...classNames, delayed ? DELAYED_CLASSNAME : undefined];
  return result.filter((c) => c !== undefined).join(" ");
}
