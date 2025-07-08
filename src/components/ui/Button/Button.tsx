import { FC, PropsWithChildren } from "react";
import css from './Button.module.scss';
import clsx from "clsx";

interface Props {
    className?: string;
    type?: 'primary' | 'white';
    size?: 'small' | 'medium';
    rounded?: "small" | "default";
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

export const Button: FC<PropsWithChildren<Props>> = ({
    className,
    type = 'primary',
    size = 'small',
    rounded = 'default',
    disabled = false,
    onClick,
    href,
    children
}) => {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            className={clsx(
                css.button,
                className,
                css[type],
                css[size],
                css[`rounded-${rounded}`],
                { [css.disabled]: disabled }
            )}
            {...(href ? { href } : { disabled, onClick })}
        >
            {children}
        </Component>
    );
}