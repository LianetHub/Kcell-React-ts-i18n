import { FC, useEffect } from 'react';
import clsx from 'clsx';
import { useSlideToggle } from 'src/hooks/useSlideToggle';
import ArrowDown from 'src/icons/ArrowDown.svg?react';
import css from '../Scheme.module.scss';

interface SchemeStepProps {
    id: number;
    title: string;
    description?: string;
    list?: string[];
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
    list,
    isOpen,
    onToggle,
    register,
}) => {
    const { elementRef, slideToggle } = useSlideToggle();


    const hasToggleableContent = description || (list && list.length > 0);

    useEffect(() => {

        if (hasToggleableContent) {
            register(id, elementRef, slideToggle);
        }
    }, [id, register, elementRef, slideToggle, hasToggleableContent]);

    return (
        <li className={clsx(css.schemeStep, { [css.active]: isOpen })}>
            <div className={css.schemeStepHeader} onClick={() => hasToggleableContent && onToggle(id)}>
                <span className={css.schemeStepNum}>{id}</span>
                <div className={css.schemeStepBody}>
                    <div className={css.schemeStepTitle}>{title}</div>
                </div>
                {hasToggleableContent && (
                    <button className={clsx(css.schemeStepButton)}>
                        <ArrowDown />
                    </button>
                )}
            </div>
            {hasToggleableContent && (
                <div ref={elementRef} className={css.schemeStepDescription}>
                    {list && list.length > 0 ? (
                        <ul className={css.schemeStepList}>
                            {list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        description
                    )}
                </div>
            )}
        </li>
    );
};