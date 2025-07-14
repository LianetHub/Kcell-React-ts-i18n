import { Promo, Offer, Services, Price } from "src/components";

import Image5 from 'src/assets/images/promo/08.png';
import { useTranslation } from 'react-i18next';

export const DigitalTarget = () => {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.digitalTarget.title'),
            description: t('services.list.digitalTarget.subtitle'),
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
                excludeServiceKey={"digitalTarget"}
            />
        </>
    )
}

