import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image7 from 'src/assets/images/promo/07.png';

import Briefcase from 'src/icons/Briefcase.svg?react';
import Chip from 'src/icons/Chip.svg?react';
import Gear from 'src/icons/Gear.svg?react';

import Autoplay from 'src/icons/Autoplay.svg?react';
import PayWithCash from 'src/icons/PayWithCash.svg?react';
import Secure from 'src/icons/Secure.svg?react';

import Search from 'src/icons/Search.svg?react';
import Gigabytes from 'src/icons/Gigabytes.svg?react';




import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";



export const Scoring = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.scoring.title'),
            description: t('services.list.scoring.subtitle'),
            text: t('services.list.scoring.description'),
            image: Image7,
        }
    ];

    const mainAdvantagesTexts: string[] = t('scoring.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: Briefcase,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: Chip,
            text: mainAdvantagesTexts[1],
        },
        {
            Icon: Gear,
            text: mainAdvantagesTexts[2],
        }
    ];

    const featuresAndCapabilitiesTexts: string[] = t('scoring.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: Autoplay,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: PayWithCash,
            text: featuresAndCapabilitiesTexts[1],
        },
        {
            Icon: Secure,
            text: featuresAndCapabilitiesTexts[2],
        }
    ];


    const workflowSteps: WorkflowStep[] = t('scoring.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('scoring.usageExamples', { returnObjects: true });


    const examplesData: Pick<CardProps, 'icon' | 'title' | 'text'>[] = rawUsageExamples.map((item, index) => {
        let iconComponent = null;
        switch (index) {
            case 0:
                iconComponent = <Search />;
                break;
            case 1:
                iconComponent = <Gigabytes />;
                break;
            case 2:
                iconComponent = <Secure />;
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
                technicalIntegration={t('scoring.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("scoring.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("scoring.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"scoring"}
            />
        </>
    )
}

