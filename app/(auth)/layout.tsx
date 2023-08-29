import { IAuthLayout } from "./interface";

const AuthLayout: React.FC<IAuthLayout> = ({
    children
}: IAuthLayout) => {
    return (
        <div
            className="
                flex
                items-center
                justify-center
                h-full
            "
        >
            {children}
        </div>
    );
};

export default AuthLayout;