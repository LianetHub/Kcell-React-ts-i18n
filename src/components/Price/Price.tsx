import { FC } from 'react';
import css from './Price.module.scss';
import clsx from 'clsx';

interface PriceBodyProps {
    title: string;
    value: string;
}

export const Price: FC<PriceBodyProps> = ({ title, value }) => {
    return (
        <div className={css.price}>
            <div className={clsx(css.priceContainer, 'container')}>
                <div className={css.priceBody}>
                    <div className={css.priceTitle}>
                        {title}
                    </div>
                    <div className={css.priceValue}>
                        {value}
                    </div>
                </div>
            </div>
        </div>
    );
};