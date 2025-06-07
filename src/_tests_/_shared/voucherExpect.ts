export function expectVoucher(price: number, result: number) {
  expect(result).toBeCloseTo(price, 0);
}
