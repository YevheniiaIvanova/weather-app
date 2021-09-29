const getCurrentDate = (): string => {
  const date = new Date();
  const month = date.toLocaleString('en', { month: 'long' });
  return `${date.getDate()} ${month}`;
};

export default getCurrentDate;
