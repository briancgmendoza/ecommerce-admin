import { Billboard, Category } from "@prisma/client";

export interface ICategoryFormProps {
    initialData: Category | null;
    billboards: Billboard[];
}

export interface ICategoryColumn {
    id: string;
    name: string;
    billboardLabel: string;
    createdAt: string;
}

export interface ICellAction {
    data: ICategoryColumn;
}