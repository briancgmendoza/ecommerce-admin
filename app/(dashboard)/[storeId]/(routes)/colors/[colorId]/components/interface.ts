import { Color } from "@prisma/client";

export interface IColorFormProps {
    initialData: Color | null;
}

export interface IColorColumn {
    id: string;
    name: string;
    value: string;
    createdAt: string;
}

export interface ICellAction {
    data: IColorColumn;
}