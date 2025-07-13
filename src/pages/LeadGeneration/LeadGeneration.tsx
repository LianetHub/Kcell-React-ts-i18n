import { Promo, Offer, Services } from "src/components";

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
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"leadGeneration"}
            />
        </>
    )
}

