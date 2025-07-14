import { FC, useEffect } from 'react';
import clsx from 'clsx';
import { useSlideToggle } from 'src/hooks/useSlideToggle';
import ArrowDown from 'src/icons/ArrowDown.svg?react';
import css from '../Scheme.module.scss';

interface SchemeStepProps {
    id: number;
    title: string;
    description: string;
    isOpen: boolean;
    onToggle: (id: number) => void;
    register: (
        id: number,
        ref: React.RefObject<HTMLDivElement | null>,
        slideToggle: () => void
    ) => void;
}


export const SchemeStep: FC<SchemeStepProps> = ({
    id,
    title,
    description,
    isOpen,
    onToggle,
    register,
}) => {
    const { elementRef, slideToggle } = useSlideToggle();

    useEffect(() => {
        register(id, elementRef, slideToggle);
    }, [id, register, elementRef, slideToggle]);

    return (
        <li className={clsx(css.schemeStep, { [css.active]: isOpen })}>
            <div className={css.schemeStepHeader} onClick={() => onToggle(id)}>
                <span className={css.schemeStepNum}>{id}</span>
                <div className={css.schemeStepBody}>
                    <div className={css.schemeStepTitle}>{title}</div>
                </div>
                <button className={clsx(css.schemeStepButton)}>
                    <ArrowDown />
                </button>
            </div>
            <div ref={elementRef} className={css.schemeStepDescription}>
                {description}
            </div>
        </li>
    );
};
