import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Tarriff from 'src/icons/Tarriff.svg?react';
import Wifi from 'src/icons/Wifi.svg?react';
import Gear from 'src/icons/Gear.svg?react';

import css from './Benefits.module.scss';
import clsx from 'clsx';
import { Card } from '@ui/Card';

type BenefitKey =
    | 'marketingSolutionsPage.advantages.wideRangeOfServices'
    | 'marketingSolutionsPage.advantages.highSpeedAndCoverage'
    | 'marketingSolutionsPage.advantages.modernTechnologies';

const benefitsData: { Icon: FC; textKey: BenefitKey }[] = [
    {
        Icon: Tarriff,
        textKey: 'marketingSolutionsPage.advantages.wideRangeOfServices',
    },
    {
        Icon: Wifi,
        textKey: 'marketingSolutionsPage.advantages.highSpeedAndCoverage',
    },
    {
        Icon: Gear,
        textKey: 'marketingSolutionsPage.advantages.modernTechnologies',
    },
];

export const Benefits: FC = () => {
    const { t } = useTranslation();

    return (
        <section className={css.benefits}>
            <div className={clsx(css.benefitsContainer, 'container')}>
                <h2 className={clsx(css.benefitsTitle, 'title')}>
                    {t('common.ourAdvantages')}
                </h2>
                <ul className={css.benefitsList}>
                    {benefitsData.map(({ Icon, textKey }, index) => (
                        <Card
                            className={css.benefitsListItem}
                            key={index}
                            icon={<Icon />}
                            text={t(textKey)}
                        >
                        </Card>
                    ))}
                </ul>
            </div>
        </section>
    );
};
