import { Examples, Offer, Price, Promo, Scheme, Services } from "src/components"
import Image4 from 'src/assets/images/promo/04.png';

import FlashSMS from 'src/icons/FlashSMS.svg?react';
import CallID from 'src/icons/CallID.svg?react';
import Target from 'src/icons/Target.svg?react';
import Briefcase from 'src/icons/Briefcase.svg?react';

import Faq from 'src/icons/Faq.svg?react';
import ParentControl from 'src/icons/ParentControl.svg?react';

import DocOfficial from 'src/icons/DocOfficial.svg?react';



import { Trans, useTranslation } from 'react-i18next';
import { BenefitItem, Benefits } from "src/components/Benefits";
import { WorkflowStep } from "src/components/Scheme";
import { CardProps } from "@ui/Card";


export const KcellContact = () => {

    const { t } = useTranslation();

    const promoSlidesData = [
        {
            title: t('services.list.kcellContact.title'),
            description: t('services.list.kcellContact.subtitle'),
            text: <Trans
                i18nKey={`services.list.kcellContact.description`}
                components={[
                    <></>,
                    <a href="https://activ.kz/smart" target="_blank" />,
                ]}
            />,
            image: Image4,
        }
    ];



    const mainAdvantagesTexts: string[] = t('kcellContact.mainAdvantages', { returnObjects: true });


    const mainAdvantages: BenefitItem[] = [
        {
            Icon: FlashSMS,
            text: mainAdvantagesTexts[0],
        },
        {
            Icon: CallID,
            text: mainAdvantagesTexts[1],
        },
        {
            Icon: Target,
            text: mainAdvantagesTexts[2],
        },
        {
            Icon: Briefcase,
            text: mainAdvantagesTexts[3],
        },
    ];

    const featuresAndCapabilitiesTexts: string[] = t('kcellContact.featuresAndCapabilities', { returnObjects: true });


    const featuresAndCapabilities: BenefitItem[] = [
        {
            Icon: Faq,
            text: featuresAndCapabilitiesTexts[0],
        },
        {
            Icon: ParentControl,
            text: featuresAndCapabilitiesTexts[1],
        }
    ];


    const workflowSteps: WorkflowStep[] = t('kcellContact.workflow.steps', { returnObjects: true });

    const rawUsageExamples: { title: string; description?: string; }[] = t('kcellContact.usageExamples', { returnObjects: true });


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
                technicalIntegration={t('kcellContact.technicalIntegration.description')}
            />
            <Examples
                items={examplesData}
            />
            <Offer
                title={t("kcellContact.offerTitle")}
            />
            <Price
                title={t("internalPage.pricingTitle")}
                value={t("kcellContact.pricingValue")}
            />
            <Services
                title={t("common.otherOffers")}
                excludeServiceKey={"kcellContact"}
            />
        </>
    )
}

