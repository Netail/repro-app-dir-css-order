import { FC, HTMLAttributes, PropsWithChildren } from "react";
import css from './test.module.css';

export const Test: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>= ({ children, className, ...rest }) => {
    return (
        <div className={`${css.override} ${className}`} >
            {children}
        </div>
    )
}