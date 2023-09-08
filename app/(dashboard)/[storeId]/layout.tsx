import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

import { IDashboardLayoutProps } from "./interface";

const DashboardLayout: React.FC<IDashboardLayoutProps> = async ({
    children,
    params
}: IDashboardLayoutProps) => {
    const { userId } = auth();

    if (!userId) redirect("/sign-in");

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    if (!store) redirect("/");

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default DashboardLayout;