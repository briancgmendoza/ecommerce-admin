"use client";

import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import {
    Copy,
    Edit,
    MoreHorizontal,
    Trash
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { ICellAction } from "../[billboardId]/components/interface";
import { useState } from "react";
import AlertModal from "@/components/modals/alert-modal";

const CellAction: React.FC<ICellAction> = ({
    data
}: ICellAction) => {
    const router = useRouter();
    const params = useParams();
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Billboard id copied to clipboard.");
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
            router.refresh();
            router.push(`/${params.storeId}/billboards`);
            toast.success("Billboard deleted.");
        } catch (error) {
            toast.error("Make sure you removed all categories using this billboard first.");
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                    >
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => router.push(`/${params.storeId}/billboards/${data.id}`)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Update
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCopy(data.id)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default CellAction;