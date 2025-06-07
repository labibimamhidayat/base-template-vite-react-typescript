import React, { useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { useExampleStore } from "@/store/exampleStore";

const ExampleTableInput: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const { items, addItem } = useExampleStore();

  const handleAdd = () => {
    if (!name || !quantity) return;
    addItem({ name, quantity: parseInt(quantity) });
    setName("");
    setQuantity("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-muted space-y-6">
      <div className="w-full max-w-2xl bg-background p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold mb-4 text-primary">
          📦 Add Inventory Item
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExampleTableInput;
