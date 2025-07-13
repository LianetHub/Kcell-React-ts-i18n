import { Offer, Promo } from "src/components"
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
        </>
    )
}

