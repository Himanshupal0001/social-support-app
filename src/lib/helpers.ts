export function formatToSimpleDate(dateInput: string | Date): string {
  const date = new Date(dateInput);

  return date.toDateString();
}
