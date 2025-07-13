import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@ui/Button';
import css from './ServiceCard.module.scss';

interface ServiceCardProps {
    title: string;
    subtitle: string;
    description: string;
    link: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, subtitle, description, link, readMoreText }) => {
    const { t } = useTranslation();

    return (
        <li className={css.serviceCard}>
            <div className={css.serviceCardTitle}>
                {title}
            </div>
            <div className={css.serviceCardSubtitle}>
                {subtitle}
            </div>
            <div className={css.serviceCardDescription}>
                {description}
            </div>
            <Button
                className={css.serviceCardBtn}
                to={link}
                color="white"
                rounded="small"
            >
                {t('common.readMore')}
            </Button>
        </li>
    );
};