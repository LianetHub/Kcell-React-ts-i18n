import { Offer, Promo, Services } from "src/components"
import Image11 from 'src/assets/images/promo/11.png';
import { useTranslation } from 'react-i18next';


export const BusinessLook = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.businessLook.title'),
            description: t('services.list.businessLook.subtitle'),
            image: Image11,
        }
    ];

    return (
        <>
            <Promo slides={promoSlidesData} />
            <Offer />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"businessLook"}
            />

        </>
    )
}

