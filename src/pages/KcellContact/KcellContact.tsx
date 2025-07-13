import { Promo, Offer, Services } from "src/components";

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
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"kcellContact"}
            />
        </>
    )
}

