"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ISizeColumn } from "../[sizesId]/components/interface";
import CellAction from "./cell-action";

export const columns: ColumnDef<ISizeColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "value",
        header: "Value",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    }
];
