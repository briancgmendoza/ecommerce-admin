"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../[billboardId]/components/columns";
import ApiList from "@/components/ui/api-list";

import { IBillboardClientProps } from "./interface";

const BillboardClient: React.FC<IBillboardClientProps> = ({
    data
}: IBillboardClientProps) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboards (${data.length})`}
                    description="Manage billboards for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey="label"
            />
            <Heading
                title="API"
                description="API endpoints for Billboards"
            />
            <Separator />
            <ApiList
                entityName="billboards"
                entityIdName="billboardId"
            />
        </>
    );
};

export default BillboardClient;