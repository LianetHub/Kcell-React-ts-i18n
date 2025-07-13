import { Promo, Benefits, Services, Offer } from "src/components";
import Image1 from 'src/assets/images/promo/01.png';
import Image2 from 'src/assets/images/promo/02.png';
import Image3 from 'src/assets/images/promo/03.png';
import { useTranslation } from 'react-i18next';



export const Home = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('marketingSolutionsPage.heroSection.slide1.title'),
            description: t('marketingSolutionsPage.heroSection.slide1.description'),
            image: Image1,
            link: '/solution-1',
        },
        {
            title: t('marketingSolutionsPage.heroSection.slide2.title'),
            description: t('marketingSolutionsPage.heroSection.slide2.description'),
            image: Image2,
            link: '/solution-2',
        },
        {
            title: t('marketingSolutionsPage.heroSection.slide3.title'),
            description: t('marketingSolutionsPage.heroSection.slide3.description'),
            image: Image3,
            link: '/solution-3',
        },
    ];

    return (
        <>
            <Promo slides={promoSlidesData} />
            <Benefits />
            <Services />
            <Offer />
        </>
    )
}

