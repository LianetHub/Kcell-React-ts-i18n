import { FC, useEffect, useRef, useState } from 'react';
import css from './Scheme.module.scss';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Gear from 'src/icons/Gear.svg?react';
import { Card } from '@ui/Card';
import { SchemeStep } from './SchemeStep';

export interface WorkflowStep {
    id: number;
    title: string;
    description?: string;
    list?: string[];
}

interface SchemeProps {
    workflowSteps: WorkflowStep[];
    technicalIntegration: string
}

export const Scheme: FC<SchemeProps> = ({ workflowSteps, technicalIntegration }) => {
    const { t } = useTranslation();

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
            if (workflowSteps[0] && (workflowSteps[0].description || workflowSteps[0].list)) {
                togglesRef.current[1]?.slideToggle();
            }
        }, 0);
        return () => clearTimeout(timer);
    }, [workflowSteps]);

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
                            list={step.list}
                            isOpen={openStepId === step.id}
                            onToggle={handleToggle}
                            register={registerStep}
                        />
                    ))}
                </ol>
                <Card
                    className={css.schemeBottom}
                    title={t('internalPage.technicalIntegration.title')}
                    text={technicalIntegration}
                    icon={<Gear />}
                    color='white'
                />
            </div>
        </div>
    );
};