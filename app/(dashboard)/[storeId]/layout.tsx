import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

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
            <div>This is Navbar</div>
            {children}
        </>
    );
};

export default DashboardLayout;