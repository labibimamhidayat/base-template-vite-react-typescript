import { voucherCases } from "@/_tests_/_mocks/voucherMock";
import { expectVoucher } from "@/_tests_/_shared/voucherExpect";
import { calculateVoucher } from "@/components/VoucherCalculator";

describe("Voucher calculation", () => {
  it("should apply 10% discount on 100000", () => {
    const result = calculateVoucher(100000, 10);
    expectVoucher(90000, result);
  });

  it("should apply max discount cap", () => {
    const { price, discount, maxDiscount } = voucherCases.withMaxDiscount;
    const result = calculateVoucher(price, discount, maxDiscount);
    expectVoucher(price - maxDiscount!, result);
  });

  it("should skip discount if under minSpend", () => {
    const { price, discount, minSpend } = voucherCases.underMinSpend;
    const result = calculateVoucher(price, discount, undefined, minSpend);
    expectVoucher(price, result);
  });
});
