import { IHeadingProps } from "./interface";

export const Heading: React.FC<IHeadingProps> = ({
    title,
    description
}: IHeadingProps) => {
    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
};