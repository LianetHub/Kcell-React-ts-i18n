import { FC, useState } from 'react';
import Logo from 'src/assets/images/logo.svg?react';
import { useTranslation } from 'react-i18next';
import css from './Header.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import ChevronDown from 'src/icons/ChevronDown.svg?react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguageMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const changeLanguage = (lng: 'ru' | 'kk') => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLanguageLabel = i18n.language === 'kk' ? t('common.kaz') : t('common.rus');

    return (
        <header className={clsx(css.header)}>
            <div className={clsx(css.headerContainer, 'container')}>
                <Link to={'/'} className={css.headerLogo}>
                    <Logo />
                    {t('common.businessBigData')}
                </Link>
                <div className={css.headerLanguage}>
                    <button
                        type="button"
                        className={clsx(css.headerLanguageToggler, {
                            [css.active]: isOpen
                        })}
                        onClick={toggleLanguageMenu}
                    >
                        {currentLanguageLabel}
                        <ChevronDown className={css.headerLanguageTogglerIcon} />
                    </button>
                    {isOpen && (
                        <div className={css.headerLanguageList}>
                            <button
                                onClick={() => changeLanguage('ru')}
                                className={clsx(css.headerLanguageItem, {
                                    [css.active]: i18n.language === 'ru',
                                })}
                            >
                                {t('common.rus')}
                            </button>
                            <button
                                onClick={() => changeLanguage('kk')}
                                className={clsx(css.headerLanguageItem, {
                                    [css.active]: i18n.language === 'kk',
                                })}
                            >
                                {t('common.kaz')}
                            </button>
                        </div>
                    )}
                </div>
                <Button
                    href=""
                    className={css.headerBtn}
                    size="medium"
                >
                    {t('common.leaveRequest')}
                </Button>
            </div>
        </header>
    );
};
