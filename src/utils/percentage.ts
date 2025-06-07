export const calculatePercentageDifference = (
  today: number,
  dayBefore: number,
) => {
  const difference = ((today - dayBefore) / dayBefore) * 100;
  return `${difference.toFixed(2)} %`;
};

// generate random number of percentegate difference from -5 to 10 with 2 decimals
export const generateRandomPercentageDifference = () => {
  const randomNum = (Math.random() * (10 - -5) + -5).toFixed(2);
  return `${randomNum} %`;
};

export const detectNegativeSymsFromString = (text: string) =>
  text.trim().startsWith("-");

export const isNanChecker = (number: number, defVal: number) =>
  Number.isNaN(number) ? defVal : number;
