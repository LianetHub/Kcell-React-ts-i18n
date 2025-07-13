import { Promo, Benefits, Services, Offer } from "src/components";
import Image1 from 'src/assets/images/promo/01.png';
import Image2 from 'src/assets/images/promo/02.png';
import Image3 from 'src/assets/images/promo/03.png';
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { TabKey } from "src/components/Services";


export const Home = () => {
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

    const handleTabChange = (tabKey: TabKey) => {
        setCurrentTab(tabKey);

    };

    return (
        <>
            <Promo slides={promoSlidesData} onButtonClick={handleTabChange} />
            <Benefits />
            <Services initialTab={currentTab} onTabChange={handleTabChange} />
            <Offer />
        </>
    )
}

