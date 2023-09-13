import { Size } from "@prisma/client";

export interface ISizeFormProps {
    initialData: Size | null;
}

export interface ISizeColumn {
    id: string;
    name: string;
    value: string;
    createdAt: string;
}

export interface ICellAction {
    data: ISizeColumn;
}