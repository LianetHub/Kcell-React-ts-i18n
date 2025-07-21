import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image10 from 'src/assets/images/promo/10.png';
import EnvelopeDownload from 'src/icons/EnvelopeDownload.svg?react';
import Target from 'src/icons/Target.svg?react';
import Documents from 'src/icons/Documents.svg?react';
import Calendar from 'src/icons/Calendar.svg?react';
import Social from 'src/icons/Social.svg?react';

import Docs from 'src/icons/Docs.svg?react';
import DocumentCheckmark from 'src/icons/DocumentCheckmark.svg?react';

import Satellite from 'src/icons/Satellite.svg?react';
import Secure from 'src/icons/Secure.svg?react';
import GoingUp from 'src/icons/GoingUp.svg?react';

import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";

export function DigitalResearch() {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.digitalResearch.title'),
            description: t('services.list.digitalResearch.subtitle'),
            text: t('services.list.digitalResearch.description'),
            image: Image10,
        }
    ];

    const mainAdvantagesTexts: string[] = t('digitalResearch.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: EnvelopeDownload,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: Target,
            text: mainAdvantagesTexts[1],
        },
        {
            Icon: Documents,
            text: mainAdvantagesTexts[2],
        },
        {
            Icon: Calendar,
            text: mainAdvantagesTexts[3],
        },
        {
            Icon: Social,
            text: mainAdvantagesTexts[4],
        },
    ];

    const featuresAndCapabilitiesTexts: string[] = t('digitalResearch.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: Docs,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: DocumentCheckmark,
            text: featuresAndCapabilitiesTexts[1],
        }
    ];


    const workflowSteps: WorkflowStep[] = t('digitalResearch.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('digitalResearch.usageExamples', { returnObjects: true });


    const examplesData: Pick<CardProps, 'icon' | 'title' | 'text'>[] = rawUsageExamples.map((item, index) => {
        let iconComponent = null;
        switch (index) {
            case 0:
                iconComponent = <Satellite />;
                break;
            case 1:
                iconComponent = <Secure />;
                break;
            case 2:
                iconComponent = <GoingUp />;
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
                technicalIntegration={t('digitalResearch.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("digitalResearch.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("digitalResearch.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"digitalResearch"}
            />
        </>
    )
}

