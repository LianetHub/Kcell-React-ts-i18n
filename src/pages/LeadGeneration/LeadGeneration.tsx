import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image5 from 'src/assets/images/promo/05.png';


import Social from 'src/icons/Social.svg?react';
import Globe from 'src/icons/Globe.svg?react';
import Target from 'src/icons/Target.svg?react';

import Precent from 'src/icons/Precent.svg?react';
import PayForMe from 'src/icons/PayForMe.svg?react';
import Gear from 'src/icons/Gear.svg?react';

import DocOfficial from 'src/icons/DocOfficial.svg?react';

import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";



export const LeadGeneration = () => {


    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.leadGeneration.title'),
            description: t('services.list.leadGeneration.subtitle'),
            text: t('services.list.leadGeneration.description'),
            image: Image5,
        }
    ];

    const mainAdvantagesTexts: string[] = t('leadGeneration.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: Social,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: Globe,
            text: mainAdvantagesTexts[1],
        },
        {
            Icon: Target,
            text: mainAdvantagesTexts[2],
        }
    ];

    const featuresAndCapabilitiesTexts: string[] = t('leadGeneration.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: Precent,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: PayForMe,
            text: featuresAndCapabilitiesTexts[1],
        },
        {
            Icon: Gear,
            text: featuresAndCapabilitiesTexts[2],
        },
    ];


    const workflowSteps: WorkflowStep[] = t('leadGeneration.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('leadGeneration.usageExamples', { returnObjects: true });


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
                technicalIntegration={t('leadGeneration.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("leadGeneration.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("leadGeneration.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"leadGeneration"}
            />
        </>
    )
}

