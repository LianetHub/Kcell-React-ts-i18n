import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Examples.module.scss';
import clsx from 'clsx';
import { Card, CardProps } from '@ui/Card';

type ExampleItem = Omit<CardProps, 'className' | 'color'>;




interface ExamplesProps {

    items: ExampleItem[];
}

export const Examples: FC<ExamplesProps> = ({ items }) => {
    const { t } = useTranslation();

    return (
        <section className={css.examples}>
            <div className={clsx(css.examplesContainer, 'container')}>
                <h2 className={clsx(css.examplesTitle, 'title')}>
                    {t('internalPage.usageExamples.title')}
                </h2>
                <ul className={css.examplesList}>
                    {items.map((item, index) => (
                        <Card
                            className={css.examplesItem}
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};