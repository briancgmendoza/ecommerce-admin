import prismadb from "@/lib/prismadb";

import { IDashboardPageProps } from "./interface";

const DashboardPage: React.FC<IDashboardPageProps> = async ({
    params
}: IDashboardPageProps) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    return (
        <div>Active Store: {store?.name}</div>
    );
};

export default DashboardPage;