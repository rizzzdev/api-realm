export const datetime = () => {
  const now = new Date();
  now.setHours(now.getHours() + 7);
  return now;
};

export const epochDatetime = () => {
  const now = Date.now();
  return now + 7 * 60 * 60 * 1000; // in milliseconds
};

export const datetimeToEpoch = (datetime: Date) => {
  return new Date(datetime).getTime(); // in milliseconds
};

export const epochToDatetime = (epoch: number) => {
  return new Date(epoch * 1000);
};
