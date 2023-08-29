import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

import { ISetupLayoutProps } from "./interface";

const SetupLayout: React.FC<ISetupLayoutProps> = async ({
    children
}: ISetupLayoutProps) => {
    const { userId } = auth();

    if (!userId) redirect("/sign-in");

    const store = await prismadb.store.findFirst({
        where: {
            userId
        }
    });

    if (store) redirect(`${store.id}`);

    return (
        <>
            {children}
        </>
    );
};

export default SetupLayout;