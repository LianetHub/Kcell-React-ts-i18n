import { FC } from 'react';
import css from './Benefits.module.scss';
import clsx from 'clsx';
import { Card } from '@ui/Card';


export type BenefitItem = {
    Icon: FC;
    text: string;
};


interface BenefitsProps {
    title: string;
    benefitsData: BenefitItem[];
    columns?: 1 | 2;
    secondaryTitle?: string;
    secondaryBenefitsData?: BenefitItem[];
}

export const Benefits: FC<BenefitsProps> = ({
    title,
    benefitsData,
    columns = 1,
    secondaryTitle,
    secondaryBenefitsData,
}) => {
    const renderBenefitsList = (data: BenefitItem[]) => (
        <ul className={css.benefitsList}>
            {data.map(({ Icon, text }, index) => (
                <Card
                    className={css.benefitsListItem}
                    key={index}
                    icon={<Icon />}
                    text={text}
                />
            ))}
        </ul>
    );

    return (
        <section className={css.benefits}>
            <div className={clsx(css.benefitsContainer, 'container')}>
                {columns === 1 ? (
                    <>
                        <h2 className={clsx(css.benefitsTitle, 'title')}>
                            {title}
                        </h2>
                        {renderBenefitsList(benefitsData)}
                    </>
                ) : (
                    <div className={css.benefitsColumns}>
                        <div className={css.benefitsColumn}>
                            <h2 className={clsx(css.benefitsTitle, 'title')}>
                                {title}
                            </h2>
                            {renderBenefitsList(benefitsData)}
                        </div>
                        {secondaryTitle && secondaryBenefitsData && (
                            <div className={css.benefitsColumn}>
                                <h2 className={clsx(css.benefitsTitle, 'title')}>
                                    {secondaryTitle}
                                </h2>
                                {renderBenefitsList(secondaryBenefitsData)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

