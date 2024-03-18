import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Test } from "@repo/ui/src/test";
import css from './test-header.module.scss';

export const TestHeader: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>= ({ children, className, ...rest }) => {
    return (
        <Test className={`${css.overrideHeader} ${className}`}>
            {children}
        </Test>
    )
}