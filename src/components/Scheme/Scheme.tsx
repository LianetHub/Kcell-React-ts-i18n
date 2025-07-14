import { FC, useEffect, useRef, useState } from 'react';
import css from './Scheme.module.scss';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Gear from 'src/icons/Gear.svg?react';
import { Card } from '@ui/Card';
import { SchemeStep } from './SchemeStep';

interface WorkflowStep {
    id: number;
    title: string;
    description: string;
}

export const Scheme: FC = () => {
    const { t } = useTranslation();

    const workflowSteps: WorkflowStep[] = [
        {
            id: 1,
            title: t('internalPage.workflow.fillFormOrMeet.title'),
            description: t('internalPage.workflow.fillFormOrMeet.description'),
        },
        {
            id: 2,
            title: t('internalPage.workflow.technicalSpecificationApproval.title'),
            description: t('internalPage.workflow.technicalSpecificationApproval.description'),
        },
        {
            id: 3,
            title: t('internalPage.workflow.commercialProposalCalculation.title'),
            description: t('internalPage.workflow.commercialProposalCalculation.description'),
        },
        {
            id: 4,
            title: t('internalPage.workflow.reportPreparationAndTransfer.title'),
            description: t('internalPage.workflow.reportPreparationAndTransfer.description'),
        },
    ];

    const togglesRef = useRef<Record<
        number,
        { elementRef: React.RefObject<HTMLDivElement | null>; slideToggle: () => void }
    >>({});

    const [openStepId, setOpenStepId] = useState<number | null>(1);

    const handleToggle = (id: number) => {
        if (openStepId && togglesRef.current[openStepId]) {
            togglesRef.current[openStepId].slideToggle();
        }

        if (openStepId === id) {
            setOpenStepId(null);
        } else {
            togglesRef.current[id]?.slideToggle();
            setOpenStepId(id);
        }
    };

    const registerStep = (
        id: number,
        ref: React.RefObject<HTMLDivElement | null>,
        slideToggle: () => void
    ) => {
        togglesRef.current[id] = { elementRef: ref, slideToggle };
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            togglesRef.current[1]?.slideToggle();
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={css.scheme}>
            <div className={clsx(css.schemeContainer, 'container')}>
                <div className={clsx(css.schemeTitle, 'title')}>
                    {t("internalPage.workflow.title")}
                </div>
                <ol className={css.schemeList}>
                    {workflowSteps.map((step) => (
                        <SchemeStep
                            key={step.id}
                            id={step.id}
                            title={step.title}
                            description={step.description}
                            isOpen={openStepId === step.id}
                            onToggle={handleToggle}
                            register={registerStep}
                        />
                    ))}
                </ol>
                <Card
                    className={css.schemeBottom}
                    title={t('internalPage.technicalIntegration.title')}
                    text={t('internalPage.technicalIntegration.description')}
                    icon={<Gear />}
                    color='white'
                />
            </div>
        </div>
    );
};
