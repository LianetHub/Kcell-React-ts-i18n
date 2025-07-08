import { FC, useEffect, useState } from 'react';
import Logo from 'src/assets/images/logo.svg?react';
import { useTranslation } from 'react-i18next';
import css from './Header.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';

export const Header: FC = () => {
    const { t, i18n } = useTranslation();


    const changeLanguage = (lng: 'ru' | 'kk') => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={clsx(css.header)}>
            <div className={clsx(css.headerContainer, 'container')}>
                <a href="#" className={css.headerLogo}>
                    <Logo />
                    {t('common.businessBigData')}
                </a>
                <div className="headerToggler">
                    <button
                        onClick={() => changeLanguage('ru')}
                        className={clsx({ [css.activeLang]: i18n.language === 'ru' })}
                    >
                        {t('common.rus')}
                    </button>
                    <button
                        onClick={() => changeLanguage('kk')}
                        className={clsx({ [css.activeLang]: i18n.language === 'kk' })}
                    >
                        {t('common.kaz')}
                    </button>
                </div>
                <Button
                    href={""}
                    className={css.headerBtn}
                    size='medium'
                >
                    {t('common.leaveRequest')}
                </Button>
            </div>
        </header >
    );
}
