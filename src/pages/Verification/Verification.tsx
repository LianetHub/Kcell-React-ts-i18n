import { Offer, Promo, Services } from "src/components"
import Image9 from 'src/assets/images/promo/09.png';
import { useTranslation } from 'react-i18next';

export const Verification = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.verification.title'),
            description: t('services.list.verification.subtitle'),
            image: Image9,
        }
    ];

    return (
        <>
            <Promo slides={promoSlidesData} />
            <Offer />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"verification"}
            />
        </>
    )
}

