import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Services.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';


type ServiceKey = 'kcellContact' | 'leadGeneration' | 'digitalTarget' | 'targetCall';

const tabs = [
    { key: 'btn1', labelKey: 'marketingSolutionsPage.services.tabs.btn1' },
    { key: 'btn2', labelKey: 'marketingSolutionsPage.services.tabs.btn2' },
    { key: 'btn3', labelKey: 'marketingSolutionsPage.services.tabs.btn3' },
] as const;


const services: { key: ServiceKey; link: string }[] = [
    { key: 'kcellContact', link: '/kcell-contact' },
    { key: 'leadGeneration', link: '/lead-generation' },
    { key: 'digitalTarget', link: '/digital-target' },
    { key: 'targetCall', link: '/target-call' },
];

export const Services: FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<string>(tabs[0].key);

    return (
        <section className={css.services}>
            <div className={clsx(css.servicesContainer, 'container')}>
                <h2 className={clsx(css.servicesTitle, 'title')}>
                    {t('common.services')}
                </h2>
                <div className={css.servicesTabs}>
                    {tabs.map((tab) => (
                        <Button
                            key={tab.key}
                            className={css.servicesTabsBtn}
                            color={activeTab === tab.key ? 'primary' : 'grey'}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {t(tab.labelKey)}
                        </Button>
                    ))}
                </div>
                <ul className={css.servicesList}>
                    {services.map(({ key, link }) => (
                        <li className={css.servicesCard} key={key}>
                            <div className={css.servicesCardTitle}>
                                {t(`marketingSolutionsPage.services.list.${key}.title`)}
                            </div>
                            <div className={css.servicesCardSubtitle}>
                                {t(`marketingSolutionsPage.services.list.${key}.subtitle`)}
                            </div>
                            <div className={css.servicesCardDescription}>
                                {t(`marketingSolutionsPage.services.list.${key}.description`)}
                            </div>
                            <Button
                                className={css.servicesCardBtn}
                                to={link}
                                color='white'
                                rounded='small'
                            >
                                {t('common.readMore')}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
