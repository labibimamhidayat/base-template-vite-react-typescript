export const getDateDaysBack = (daysBack: number) => {
  const today = new Date();

  // Subtract the specified number of days from today's date
  today.setDate(today.getDate() - daysBack);

  // Format the date as YYYY-MM-DD
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
  const day = today.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};
