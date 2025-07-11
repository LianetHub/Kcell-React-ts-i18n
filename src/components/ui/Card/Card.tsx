import { FC, PropsWithChildren, ReactNode } from "react";
import css from './Card.module.scss';
import clsx from "clsx";

interface Props {
    className?: string;
    icon?: ReactNode;
    title?: string;
    text?: string;
}

export const Card: FC<PropsWithChildren<Props>> = ({
    className,
    icon,
    title,
    text
}) => {


    return (
        <li className={clsx(css.card, className)}>
            {icon && (
                <div className={css.cardIcon}>
                    {icon}
                </div>
            )}

            {(!!title || !!text) && (
                <div className={css.cardBody}>
                    {title && (
                        <div className={css.cardTitle}>
                            {title}
                        </div>
                    )}
                    {text && (
                        <div
                            className={css.cardText}
                        >
                            {text}
                        </div>
                    )}
                </div>
            )}
        </li>
    );
};
