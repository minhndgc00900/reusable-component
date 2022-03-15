const MAX = 999999;

export const getRandomId = () => {
  const randomNumber = Math.floor(Math.random() * MAX);
  return randomNumber;
};

export const convertSignalToName = (param: string) => {
  switch (param) {
    case 'eq':
      return 'equals'     
    case 'gte':
      return 'is greater than'     
    case 'lt':
      return 'is less than'     
    case 'contains':
      return 'contains'     
    default:
      return '';
  }
}