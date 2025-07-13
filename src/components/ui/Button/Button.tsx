import { FC, PropsWithChildren } from "react";
import css from './Button.module.scss';
import clsx from "clsx";
import { Link } from 'react-router-dom';

interface Props {
    className?: string;
    color?: 'primary' | 'white' | "grey";
    size?: 'small' | 'medium';
    rounded?: "small" | "default";
    disabled?: boolean;
    onClick?: () => void;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<PropsWithChildren<Props>> = ({
    className,
    color = 'primary',
    size = 'small',
    rounded = 'default',
    disabled = false,
    onClick,
    to,
    type = 'button',
    children
}) => {
    const classNames = clsx(
        css.button,
        className,
        css[color],
        css[size],
        css[`rounded-${rounded}`],
        { [css.disabled]: disabled }
    );

    if (to) {
        if (to.startsWith('#')) {
            return (
                <a
                    href={to}
                    className={classNames}
                    onClick={disabled ? (e) => e.preventDefault() : onClick}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                to={to}
                className={classNames}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
