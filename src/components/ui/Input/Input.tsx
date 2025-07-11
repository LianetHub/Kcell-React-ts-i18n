import { FC, InputHTMLAttributes } from "react";
import css from './Input.module.scss';
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
}

export const Input: FC<Props> = ({
    className,
    label,
    id,
    ...props
}) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={css.field}>
            {label && (
                <label htmlFor={inputId} className={css.label}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={clsx(css.input, className)}
                {...props}
            />
        </div>
    );
};
