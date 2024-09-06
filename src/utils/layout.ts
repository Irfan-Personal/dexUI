export const compareUrl = (a: string, b: string) => {
  if (`/${a.split('/')[1]}` === b)
    return true;
  return false;
};