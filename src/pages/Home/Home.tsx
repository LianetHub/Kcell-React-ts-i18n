import { Promo, Benefits, Services, Offer } from "src/components";
import Image1 from 'src/assets/images/promo/01.png';
import Image2 from 'src/assets/images/promo/02.png';
import Image3 from 'src/assets/images/promo/03.png';
import { useTranslation } from 'react-i18next';
import { useState, FC } from "react";
import { TabKey } from "src/components/Services";
import Tarriff from 'src/icons/Tarriff.svg?react';
import Wifi from 'src/icons/Wifi.svg?react';
import Gear from 'src/icons/Gear.svg?react';
import { BenefitItem } from "src/components/Benefits";


export const Home: FC = () => {
    const { t } = useTranslation();

    const [currentTab, setCurrentTab] = useState<TabKey>("marketing-solutions");

    const promoSlidesData = [
        {
            title: t('marketingSolutionsPage.heroSection.slide1.title'),
            description: t('marketingSolutionsPage.heroSection.slide1.description'),
            image: Image1,
            link: '#services',
            targetTab: 'marketing-solutions' as TabKey,
        },
        {
            title: t('marketingSolutionsPage.heroSection.slide2.title'),
            description: t('marketingSolutionsPage.heroSection.slide2.description'),
            image: Image2,
            link: '#services',
            targetTab: 'financial-services' as TabKey,
        },
        {
            title: t('marketingSolutionsPage.heroSection.slide3.title'),
            description: t('marketingSolutionsPage.heroSection.slide3.description'),
            image: Image3,
            link: '#services',
            targetTab: 'other' as TabKey,
        },
    ];

    const benefitsData: BenefitItem[] = [
        {
            Icon: Tarriff,
            text: t('marketingSolutionsPage.advantages.wideRangeOfServices'),
        },
        {
            Icon: Wifi,
            text: t('marketingSolutionsPage.advantages.highSpeedAndCoverage'),
        },
        {
            Icon: Gear,
            text: t('marketingSolutionsPage.advantages.modernTechnologies'),
        },
    ];

    const handleTabChange = (tabKey: TabKey) => {
        setCurrentTab(tabKey);

    };


    return (
        <>
            <Promo slides={promoSlidesData} onButtonClick={handleTabChange} />
            <Benefits
                title={t('common.ourAdvantages')}
                benefitsData={benefitsData}
            />
            <Services
                showTabs={true}
                initialTab={currentTab}
                onTabChange={handleTabChange}
                title={t("common.services")}
            />
            <Offer />
        </>
    )
}

