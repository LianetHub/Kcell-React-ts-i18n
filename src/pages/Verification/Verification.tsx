import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image9 from 'src/assets/images/promo/09.png';


import Docs from 'src/icons/Docs.svg?react';
import Gear from 'src/icons/Gear.svg?react';
import DocumentCheckmark from 'src/icons/DocumentCheckmark.svg?react';

import UserIdentity from 'src/icons/UserIdentity.svg?react';
import Resident from 'src/icons/Resident.svg?react';
import Promotion from 'src/icons/Promotion.svg?react';

import PersonAlive from 'src/icons/PersonAlive.svg?react';
import Database from 'src/icons/Database.svg?react';



import { useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";



export const Verification = () => {
    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.verification.title'),
            description: t('services.list.verification.subtitle'),
            text: t('services.list.verification.description'),
            image: Image9,
        }
    ];

    const mainAdvantagesTexts: string[] = t('verification.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: Docs,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: Gear,
            text: mainAdvantagesTexts[1],
        },
        {
            Icon: DocumentCheckmark,
            text: mainAdvantagesTexts[2],
        }
    ];

    const featuresAndCapabilitiesTexts: string[] = t('verification.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: UserIdentity,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: Resident,
            text: featuresAndCapabilitiesTexts[1],
        },
        {
            Icon: Promotion,
            text: featuresAndCapabilitiesTexts[2],
        }
    ];


    const workflowSteps: WorkflowStep[] = t('verification.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('verification.usageExamples', { returnObjects: true });


    const examplesData: Pick<CardProps, 'icon' | 'title' | 'text'>[] = rawUsageExamples.map((item, index) => {
        let iconComponent = null;
        switch (index) {
            case 0:
                iconComponent = <PersonAlive />;
                break;
            case 1:
                iconComponent = <Database />;
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
                technicalIntegration={t('verification.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("verification.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("verification.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"verification"}
            />
        </>
    )
}

