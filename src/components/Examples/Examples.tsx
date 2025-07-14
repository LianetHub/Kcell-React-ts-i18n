import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Examples.module.scss';
import clsx from 'clsx';
import { Card } from '@ui/Card';

import Map from 'src/icons/Map.svg?react';
import Gigabytes from 'src/icons/Gigabytes.svg?react';
import Planes from 'src/icons/Planes.svg?react';
import Hello from 'src/icons/Hello.svg?react';
import DeviceSettings from 'src/icons/DeviceSettings.svg?react';

export const Examples: FC = () => {
    const { t } = useTranslation();

    const examples = [
        {
            icon: <Map />,
            title: t('internalPage.usageExamples.geolocationReport.title'),
            text: t('internalPage.usageExamples.geolocationReport.description'),
        },
        {
            icon: <Gigabytes />,
            title: t('internalPage.usageExamples.socialScoring.title'),
            text: t('internalPage.usageExamples.socialScoring.description'),
        },
        {
            icon: <Planes />,
            title: t('internalPage.usageExamples.tourismMonitoring.title'),
            text: t('internalPage.usageExamples.tourismMonitoring.description'),
        },
        {
            icon: <Hello />,
            title: t('internalPage.usageExamples.behavioralAndGeoAnalysis.title'),
            text: t('internalPage.usageExamples.behavioralAndGeoAnalysis.description'),
        },
        {
            icon: <DeviceSettings />,
            title: t('internalPage.usageExamples.mobileDeviceAnalytics.title'),
            text: t('internalPage.usageExamples.mobileDeviceAnalytics.description'),
        },
    ];

    return (
        <section className={css.examples}>
            <div className={clsx(css.examplesContainer, 'container')}>
                <h2 className={clsx(css.examplesTitle, 'title')}>
                    {t('internalPage.usageExamples.title')}
                </h2>
                <ul className={css.examplesList}>
                    {examples.map((item, index) => (
                        <Card
                            className={css.examplesItem}
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
