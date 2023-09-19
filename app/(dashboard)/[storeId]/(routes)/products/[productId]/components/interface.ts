import { Category, Color, Image, Product, Size } from "@prisma/client";

export interface IProductFormProps {
    initialData: Product & {
        images: Image[];
    } | null;
    categories: Category[];
    sizes: Size[];
    colors: Color[];
}

export interface IProductColumn {
    id: string;
    name: string;
    price: string;
    size: string;
    category: string;
    color: string;
    isFeatured: boolean;
    isArchived: boolean;
    createdAt: string;
}

export interface ICellAction {
    data: IProductColumn;
}