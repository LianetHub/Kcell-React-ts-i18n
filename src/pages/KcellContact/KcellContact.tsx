import { Promo, Offer, Services, Price } from "src/components";

import Image4 from 'src/assets/images/promo/04.png';
import { useTranslation } from 'react-i18next';


export const KcellContact = () => {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.kcellContact.title'),
            description: t('services.list.kcellContact.subtitle'),
            image: Image4,
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
                excludeServiceKey={"kcellContact"}
            />
        </>
    )
}

