import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image10 from 'src/assets/images/promo/10.png';
import AdditionalService from 'src/icons/AdditionalService.svg?react';
import Globe from 'src/icons/Globe.svg?react';
import DocumentCheckmark from 'src/icons/DocumentCheckmark.svg?react';
import DeliveryLocation from 'src/icons/DeliveryLocation.svg?react';
import Gear from 'src/icons/Gear.svg?react';
import Details from 'src/icons/Details.svg?react';
import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";

export function DigitalResearch() {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.digitalResearch.title'),
            description: t('services.list.digitalResearch.subtitle'),
            image: Image10,
        }
    ];

    const mainAdvantages: BenefitItem[] = [
        {
            Icon: AdditionalService,
            text: t('internalPage.mainAdvantages.parametersInfo'),
        },
        {
            Icon: Globe,
            text: t('internalPage.mainAdvantages.aggregatedData'),
        },
        {
            Icon: DocumentCheckmark,
            text: t('internalPage.mainAdvantages.reportFormats'),
        },
    ];

    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: DeliveryLocation,
            text: t('internalPage.featuresAndCapabilities.geoanalyticsAndHeatmaps'),
        },
        {
            Icon: Gear,
            text: t('internalPage.featuresAndCapabilities.socioDemographicParameters'),
        },
        {
            Icon: Details,
            text: t('internalPage.featuresAndCapabilities.behavioralAnalytics'),
        },
    ];

    return (
        <>
            <Promo slides={promoSlidesData} />
            <Benefits
                columns={2}
                title={t('internalPage.mainAdvantages.title')}
                benefitsData={mainAdvantages}
                secondaryTitle={t('internalPage.featuresAndCapabilities.title')}
                secondaryBenefitsData={featuresAndCapabilities}
            />
            <Scheme />
            <Examples />
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

