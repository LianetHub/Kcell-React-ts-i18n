import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image6 from 'src/assets/images/promo/06.png';
import AdditionalService from 'src/icons/AdditionalService.svg?react';
import Globe from 'src/icons/Globe.svg?react';
import DeliveryLocation from 'src/icons/DeliveryLocation.svg?react';
import Gear from 'src/icons/Gear.svg?react';
import Map from 'src/icons/Map.svg?react';
import Gigabytes from 'src/icons/Gigabytes.svg?react';
import Planes from 'src/icons/Planes.svg?react';
import Hello from 'src/icons/Hello.svg?react';
import DeviceSettings from 'src/icons/DeviceSettings.svg?react';

import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";



export const TargetCall = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.targetCall.title'),
            description: t('services.list.targetCall.subtitle'),
            text: t('services.list.targetCall.description'),
            image: Image6,
        }
    ];

    const mainAdvantagesTexts: string[] = t('targetCall.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: AdditionalService,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: Globe,
            text: mainAdvantagesTexts[1],
        }
    ];

    const featuresAndCapabilitiesTexts: string[] = t('targetCall.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: DeliveryLocation,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: Gear,
            text: featuresAndCapabilitiesTexts[1],
        },
        {
            Icon: Gear,
            text: featuresAndCapabilitiesTexts[2],
        },
    ];


    const workflowSteps: WorkflowStep[] = t('targetCall.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('targetCall.usageExamples', { returnObjects: true });


    const examplesData: Pick<CardProps, 'icon' | 'title' | 'text'>[] = rawUsageExamples.map((item, index) => {
        let iconComponent = null;
        switch (index) {
            case 0:
                iconComponent = <Map />;
                break;
            case 1:
                iconComponent = <Gigabytes />;
                break;
            case 2:
                iconComponent = <Planes />;
                break;
            case 3:
                iconComponent = <Hello />;
                break;
            case 4:
                iconComponent = <DeviceSettings />;
                break;
            default:
                iconComponent = null;
        }

        return {
            icon: iconComponent,
            title: item.title,
            text: item.description || undefined,
        };
    });



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
            <Scheme
                workflowSteps={workflowSteps}
                technicalIntegration={t('targetCall.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("targetCall.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("targetCall.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"targetCall"}
            />
        </>
    )
}

