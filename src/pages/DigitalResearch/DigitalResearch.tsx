import { Offer, Price, Promo, Services } from "src/components"
import Image10 from 'src/assets/images/promo/10.png';
import { useTranslation } from 'react-i18next';

export function DigitalResearch() {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.digitalResearch.title'),
            description: t('services.list.digitalResearch.subtitle'),
            image: Image10,
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
                excludeServiceKey={"digitalResearch"}
            />
        </>
    )
}

