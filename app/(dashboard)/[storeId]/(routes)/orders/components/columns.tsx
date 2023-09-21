"use client";

import { ColumnDef } from "@tanstack/react-table";

import { IOrderColumn } from "./interface";

export const columns: ColumnDef<IOrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "totalPrice",
        header: "Total Price",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
    },
];
