import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Benefits.module.scss';
import clsx from 'clsx';


export const Benefits: FC = () => {
    const { t } = useTranslation();

    return (
        <section className={css.benefits}>
            <div className={clsx(css.benefitsContainer, 'container')}>
                <h2 className={clsx(css.benefitsTitle, 'title')}>
                    Наши преимущества
                </h2>
            </div>
        </section>
    );
};
