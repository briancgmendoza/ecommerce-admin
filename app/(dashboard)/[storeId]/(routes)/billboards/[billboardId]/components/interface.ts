import { Billboard } from "@prisma/client";

export interface IBillboardFormProps {
    initialData: Billboard | null;
}

export interface IBillboardColumn {
    id: string;
    label: string;
    createdAt: string;
}

export interface ICellAction {
    data: IBillboardColumn;
}