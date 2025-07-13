import { Offer, Promo, Services } from "src/components"
import Image7 from 'src/assets/images/promo/07.png';
import { useTranslation } from 'react-i18next';

export const Scoring = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.scoring.title'),
            description: t('services.list.scoring.subtitle'),
            image: Image7,
        }
    ];

    return (
        <>
            <Promo slides={promoSlidesData} />
            <Offer />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"scoring"}
            />
        </>
    )
}

