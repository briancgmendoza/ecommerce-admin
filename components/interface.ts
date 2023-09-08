import { Store } from "@prisma/client";

import { PopoverTrigger } from "./ui/popover";

export interface IMainNavProps {
    className: string;
    props?: React.HTMLAttributes<HTMLElement>;
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

export interface IStoreSwitcherProps extends PopoverTriggerProps {
    items: Store[];
}