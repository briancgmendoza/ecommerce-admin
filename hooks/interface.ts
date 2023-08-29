export interface IModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}