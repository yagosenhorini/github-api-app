export const dateFormatterToYear = (date: Date | string) => {
  if (!date) {
    throw new Error('Date must be passed inside function');
  }
  const dateToFormat = new Date(date);
  const formatedDate = new Date(dateToFormat).getFullYear();
  return formatedDate;
};

export const dateFormatter = (date: Date | string) => {
  if (!date) {
    throw new Error('Date must be passed inside function');
  }
  const dateToFormat = new Date(date);
  const formatedDate = new Intl.DateTimeFormat('pt-BR').format(dateToFormat);
  return formatedDate;
};
