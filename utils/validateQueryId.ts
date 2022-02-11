export const validateQueryId = (
  id: string | string[] | undefined
): string | undefined => (typeof id === "string" ? id : undefined);
