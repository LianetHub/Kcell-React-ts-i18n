import { Offer, Price, Promo, Services } from "src/components"
import Image6 from 'src/assets/images/promo/06.png';
import { useTranslation } from 'react-i18next';

export const TargetCall = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.targetCall.title'),
            description: t('services.list.targetCall.subtitle'),
            image: Image6,
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
                excludeServiceKey={"targetCall"}
            />
        </>
    )
}

