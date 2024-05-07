import { FC, HTMLAttributes, PropsWithChildren } from "react";
import css from './test.module.scss';

export const Test: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, className, ...rest }) => {
    return (
        <div className={`${css.root} ${className || ''}`} {...rest}>
            {children}
        </div>
    )
}