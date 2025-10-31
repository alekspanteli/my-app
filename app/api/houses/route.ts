import { House } from "@/app/components/house-list";
import { NextResponse } from "next/server";

const housesArray: House[] = [
  { id: 1, name: "House 1", address: "123 Main St", price: 100000 },
  { id: 2, name: "House 2", address: "456 Main St", price: 200000 },
];

export async function GET() {
  return NextResponse.json(housesArray);
}