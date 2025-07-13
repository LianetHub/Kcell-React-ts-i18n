import { FC, forwardRef } from 'react'; // Removed useState, useEffect
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

export type TabKey = 'marketing-solutions' | 'financial-services' | 'other';

interface ServicesProps {
    initialTab?: TabKey;
    onTabChange: (tabKey: TabKey) => void;
}

const tabs = [
    { key: 'marketing-solutions', labelKey: 'services.tabs.btn1' },
    { key: 'financial-services', labelKey: 'services.tabs.btn2' },
    { key: 'other', labelKey: 'services.tabs.btn3' },
] as const;

const services: { key: ServiceKey; link: string; tab: TabKey }[] = [
    { key: 'kcellContact', link: '/kcell-contact', tab: 'marketing-solutions' },
    { key: 'leadGeneration', link: '/lead-generation', tab: 'marketing-solutions' },
    { key: 'digitalTarget', link: '/digital-target', tab: 'marketing-solutions' },
    { key: 'targetCall', link: '/target-call', tab: 'marketing-solutions' },
    { key: 'scoring', link: '/scoring', tab: 'financial-services' },
    { key: 'verification', link: '/verification', tab: 'financial-services' },
    { key: 'digitalResearch', link: '/digital-research', tab: 'other' },
    { key: 'businessLook', link: '/business-look', tab: 'other' },
];

export const Services: FC<ServicesProps> = forwardRef<HTMLElement, ServicesProps>(({ initialTab, onTabChange }, ref) => {
    const { t } = useTranslation();

    const activeTab = initialTab || 'marketing-solutions';

    return (
        <section id='services' className={css.services} ref={ref}>
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
                                onClick={() => onTabChange(tab.key)}
                            >
                                {t(tab.labelKey)}
                            </Button>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {tabs.map((tab) => (
                    <ul
                        key={tab.key}
                        className={clsx(css.servicesList, {
                            [css.hidden]: activeTab !== tab.key
                        })}
                    >
                        {services
                            .filter(service => service.tab === tab.key)
                            .map(({ key, link }) => (
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
                ))}
            </div>
        </section>
    );
});