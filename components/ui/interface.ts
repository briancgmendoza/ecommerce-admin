export interface IModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export interface IHeadingProps {
    title: string;
    description: string;
}

export interface IApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

export interface IImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}