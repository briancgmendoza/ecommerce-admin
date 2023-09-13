"use client";

import { ColumnDef } from "@tanstack/react-table";

import { ICategoryColumn } from "../[categoryId]/components/interface";
import CellAction from "./cell-action";

export const columns: ColumnDef<ICategoryColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "billboard",
        header: "Billboard",
        cell: ({ row }) => row.original.billboardLabel
    },
    {
        accessorKey: "createdAt",
        header: "Date"
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    }
];
