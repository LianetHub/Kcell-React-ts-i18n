import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';

import css from './Services.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';

type ServiceKey =
    | 'kcellContact'
    | 'leadGeneration'
    | 'digitalTarget'
    | 'targetCall'
    | 'scoring'
    | 'verification'
    | 'digitalResearch'
    | 'businessLook';

type TabKey = 'btn1' | 'btn2' | 'btn3';

const tabs = [
    { key: 'btn1', labelKey: 'services.tabs.btn1' },
    { key: 'btn2', labelKey: 'services.tabs.btn2' },
    { key: 'btn3', labelKey: 'services.tabs.btn3' },
] as const;

const services: { key: ServiceKey; link: string; tab: TabKey }[] = [
    { key: 'kcellContact', link: '/kcell-contact', tab: 'btn1' },
    { key: 'leadGeneration', link: '/lead-generation', tab: 'btn1' },
    { key: 'digitalTarget', link: '/digital-target', tab: 'btn1' },
    { key: 'targetCall', link: '/target-call', tab: 'btn1' },
    { key: 'scoring', link: '/scoring', tab: 'btn2' },
    { key: 'verification', link: '/verification', tab: 'btn2' },
    { key: 'digitalResearch', link: '/digital-research', tab: 'btn3' },
    { key: 'businessLook', link: '/business-look', tab: 'btn3' },
];

export const Services: FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<TabKey>('btn1');

    const filteredServices = services.filter(service => service.tab === activeTab);

    return (
        <section className={css.services}>
            <div className={clsx(css.servicesContainer, 'container')}>
                <h2 className={clsx(css.servicesTitle, 'title')}>
                    {t('common.services')}
                </h2>

                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={8}
                    className={css.servicesTabs}
                >
                    {tabs.map((tab) => (
                        <SwiperSlide key={tab.key} className={css.servicesTabsSlide}>
                            <Button
                                className={clsx(css.servicesTabsBtn, {
                                    [css.active]: activeTab === tab.key
                                })}
                                color={activeTab === tab.key ? 'primary' : 'grey'}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {t(tab.labelKey)}
                            </Button>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ul className={css.servicesList}>
                    {filteredServices.map(({ key, link }) => (
                        <li className={css.servicesCard} key={key}>
                            <div className={css.servicesCardTitle}>
                                {t(`services.list.${key}.title`)}
                            </div>
                            <div className={css.servicesCardSubtitle}>
                                {t(`services.list.${key}.subtitle`)}
                            </div>
                            <div className={css.servicesCardDescription}>
                                {t(`services.list.${key}.description`)}
                            </div>
                            <Button
                                className={css.servicesCardBtn}
                                to={link}
                                color="white"
                                rounded="small"
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
