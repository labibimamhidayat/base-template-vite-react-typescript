import React, { useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";

// Business logic for voucher calculation

export function calculateVoucher(
  price: number,
  discount: number,
  maxDiscount?: number,
  minSpend?: number,
): number {
  if (minSpend && price < minSpend) return price;
  let calculated = price - (price * discount) / 100;
  if (maxDiscount) {
    const maxAllowed = price - maxDiscount;
    calculated = Math.max(calculated, maxAllowed);
  }
  return Math.max(0, calculated);
}

const VoucherCalculator: React.FC = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (!isNaN(p) && !isNaN(d)) {
      const result = calculateVoucher(p, d, 30000, 50000); // maxDiscount = 30k, minSpend = 50k
      setFinalPrice(result);
    } else {
      setFinalPrice(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-primary">
            🎟️ Voucher Discount Calculator
          </h2>

          <div className="space-y-2">
            <h3>Original Price (e.g. 100000)</h3>
            <Input
              id="price"
              type="number"
              placeholder="Enter original price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <h3>Discount (%)</h3>
            <Input
              id="discount"
              type="number"
              placeholder="Enter discount (e.g. 10)"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>

          <Button className="w-full mt-4" onClick={calculate}>
            Calculate Final Price
          </Button>

          {finalPrice !== null && (
            <div className="text-center mt-4 text-lg font-semibold text-foreground">
              Final Price:{" "}
              <span className="text-primary">
                Rp {finalPrice.toLocaleString()}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VoucherCalculator;
