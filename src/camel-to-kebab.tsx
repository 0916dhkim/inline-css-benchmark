export const camelToKebab = (camelCaseString: string) =>
  camelCaseString
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
