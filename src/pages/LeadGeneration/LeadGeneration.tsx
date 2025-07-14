import { Promo, Offer, Services, Price } from "src/components";

import Image5 from 'src/assets/images/promo/05.png';
import { useTranslation } from 'react-i18next';


export const LeadGeneration = () => {


    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.leadGeneration.title'),
            description: t('services.list.leadGeneration.subtitle'),
            image: Image5,
        }
    ];

    return (
        <>
            <Promo slides={promoSlidesData} />
            <Offer />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("internalPage.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"leadGeneration"}
            />
        </>
    )
}

