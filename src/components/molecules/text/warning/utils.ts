export const getRestDate = (deadline: string): number => {
  const restTime = new Date(deadline).getTime();
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return Math.floor((restTime - date.getTime()) / 1000 / 60 / 60 / 24);
};
