export interface IOrderColumn {
    id: string;
    phone: string;
    address: string;
    isPaid: boolean;
    totalPrice: string;
    products: string;
    createdAt: string;
}

export interface IOrderClientProps {
    data: IOrderColumn[];
}