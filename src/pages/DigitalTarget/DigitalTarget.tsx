import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image8 from 'src/assets/images/promo/08.png';

import Star from 'src/icons/Star.svg?react';
import Target from 'src/icons/Target.svg?react';
import Gear from 'src/icons/Gear.svg?react';

import ParentControl from 'src/icons/ParentControl.svg?react';
import ZeroActive from 'src/icons/ZeroActive.svg?react';

import DocOfficial from 'src/icons/DocOfficial.svg?react';


import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";


export const DigitalTarget = () => {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.digitalTarget.title'),
            description: t('services.list.digitalTarget.subtitle'),
            text: t('services.list.digitalTarget.description'),
            image: Image8,
        }
    ];

    const mainAdvantagesTexts: string[] = t('digitalTarget.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: Star,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: Target,
            text: mainAdvantagesTexts[1],
        },
        {
            Icon: Gear,
            text: mainAdvantagesTexts[2],
        },
    ];

    const featuresAndCapabilitiesTexts: string[] = t('digitalTarget.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: ParentControl,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: ZeroActive,
            text: featuresAndCapabilitiesTexts[1],
        }
    ];


    const workflowSteps: WorkflowStep[] = t('digitalTarget.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('digitalTarget.usageExamples', { returnObjects: true });


    const examplesData: Pick<CardProps, 'icon' | 'title' | 'text'>[] = rawUsageExamples.map((item, index) => {
        let iconComponent = null;
        switch (index) {
            case 0:
                iconComponent = <DocOfficial />;
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
                technicalIntegration={t('digitalTarget.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("digitalTarget.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("digitalTarget.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"digitalTarget"}
            />
        </>
    )
}

