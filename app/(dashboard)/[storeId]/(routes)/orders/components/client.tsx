"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

import { IOrderClientProps } from "./interface";

const OrderClient: React.FC<IOrderClientProps> = ({
    data
}: IOrderClientProps) => {
    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey="products"
            />
        </>
    );
};

export default OrderClient;