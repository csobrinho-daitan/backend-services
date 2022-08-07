export const isNullOrUndefined = (argument: any): boolean => {
  if (argument === null || argument === undefined) {
    return true
  }
  return false;
}