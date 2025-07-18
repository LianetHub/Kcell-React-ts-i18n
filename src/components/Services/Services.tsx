import { FC, forwardRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import css from './Services.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import { ServiceCard } from './ServiceCard';

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
    title: string;
    initialTab?: TabKey;
    onTabChange?: (tabKey: TabKey) => void;
    showTabs?: boolean;
    excludeServiceKey?: ServiceKey;
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

export const Services: FC<ServicesProps> = forwardRef<HTMLElement, ServicesProps>(
    ({ title,
        initialTab,
        onTabChange,
        showTabs = false,
        excludeServiceKey
    }, ref) => {
        const { t } = useTranslation();

        const activeTab = showTabs ? (initialTab || 'marketing-solutions') : 'marketing-solutions';

        const filteredServices = showTabs
            ? services
            : services.filter(service => service.key !== excludeServiceKey);

        const renderedServiceCards = filteredServices.map(({ key, link }) => (
            <ServiceCard
                key={key}
                title={t(`services.list.${key}.title`)}
                subtitle={t(`services.list.${key}.subtitle`)}
                description={
                    <Trans
                        i18nKey={`services.list.${key}.description`}
                        components={[
                            <></>,
                            <a href="https://activ.kz/smart" className={css.link} target="_blank" />,
                        ]}
                    />
                }
                link={link}

            />
        ));

        return (
            <section id='services' className={css.services} ref={ref}>
                <div className={clsx(css.servicesContainer, 'container')}>
                    <h2 className={clsx(css.servicesTitle, 'title')}>
                        {title}
                    </h2>

                    {showTabs && (
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
                                        onClick={() => onTabChange && onTabChange(tab.key)}
                                    >
                                        {t(tab.labelKey)}
                                    </Button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    {showTabs ? (
                        tabs.map((tab) => (
                            <ul
                                key={tab.key}
                                className={clsx(css.servicesList, {
                                    [css.hidden]: activeTab !== tab.key
                                })}
                            >
                                {services
                                    .filter(service => service.tab === tab.key)
                                    .map(({ key, link }) => (
                                        <ServiceCard
                                            key={key}
                                            title={t(`services.list.${key}.title`)}
                                            subtitle={t(`services.list.${key}.subtitle`)}
                                            description={
                                                <Trans
                                                    i18nKey={`services.list.${key}.description`}
                                                    components={[
                                                        <></>,
                                                        <a href="https://activ.kz/smart" className={css.link} target="_blank" />,
                                                    ]}
                                                />
                                            }
                                            link={link}
                                        />
                                    ))}
                            </ul>
                        ))
                    ) : (
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={'auto'}
                            spaceBetween={16}
                            grabCursor={true}
                            className={css.servicesSlider}
                            pagination={{ clickable: true }}
                        >
                            {renderedServiceCards.map((serviceCard, index) => (
                                <SwiperSlide key={index}
                                    className={css.servicesSlide}>
                                    {serviceCard}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </section>
        );
    }
);