import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from './Footer.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/images/logo.svg?react';
import ChevronDown from 'src/icons/ChevronDown.svg?react';
import ArrowDown from 'src/icons/ArrowDown.svg?react';
import { useSlideToggle } from 'src/hooks/useSlideToggle';

type FooterTextKey =
    | 'footer.forInvestors'
    | 'footer.forPartners'
    | 'footer.forClients'
    | 'footer.aboutCompany'
    | 'footer.successStory'
    | 'footer.careersInKcell'
    | 'footer.procurements'
    | 'footer.policies'
    | 'footer.responsibleBusiness'
    | 'footer.publicOfferAgreement'
    | 'footer.news'
    | 'footer.pressCenter'
    | 'footer.frequentlyAskedQuestions'
    | 'footer.archiveOfGoodsAndServices'
    | 'footer.corporateClientAdvantages'
    | 'footer.becomeCorporateClient'
    | 'footer.forCorporateClients'
    | 'footer.serviceQuestions'
    | 'footer.licenseText'
    | 'footer.serviceContact'
    | 'footer.privacyPolicy'
    | 'footer.copyright';

export const Footer: FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(true);
    const { elementRef: footerBodyRef, slideToggle } = useSlideToggle(300);

    const { elementRef: aboutRef, slideToggle: toggleAbout } = useSlideToggle(300);
    const { elementRef: clientsRef, slideToggle: toggleClients } = useSlideToggle(300);
    const { elementRef: corporateRef, slideToggle: toggleCorporate } = useSlideToggle(300);


    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isClientsOpen, setIsClientsOpen] = useState(false);
    const [isCorporateOpen, setIsCorporateOpen] = useState(false);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 576;


    const handleToggle = () => {
        slideToggle();
        setIsOpen((prev) => !prev);
    };

    const handleColumnClick = (
        toggleFn: () => void,
        toggleState: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        if (isMobile) {
            toggleFn();
            toggleState(prev => !prev);
        }
    };

    const aboutCompanyLinks: { to: string; textKey: FooterTextKey }[] = [
        { to: 'https://www.kcell.kz/about', textKey: 'footer.aboutCompany' },
        { to: 'https://b2b.kcell.kz/ru/product/success', textKey: 'footer.successStory' },
        { to: 'https://b2b.kcell.kz/ru/article/career', textKey: 'footer.careersInKcell' },
        { to: 'https://www.kcell.kz/purchases', textKey: 'footer.procurements' },
        { to: 'https://b2b.kcell.kz/ru/article/policies', textKey: 'footer.policies' },
        { to: 'https://b2b.kcell.kz/ru/article/responsible-business', textKey: 'footer.responsibleBusiness' },
        { to: 'https://b2b.kcell.kz/ru/product/documents', textKey: 'footer.publicOfferAgreement' },
    ];

    const forClientsLinks: { to: string; textKey: FooterTextKey }[] = [
        { to: 'https://www.kcell.kz/news', textKey: 'footer.news' },
        { to: 'https://www.kcell.kz/press-releases', textKey: 'footer.pressCenter' },
        { to: 'https://www.kcell.kz/faq', textKey: 'footer.frequentlyAskedQuestions' },
        { to: 'https://investors.kcell.kz/', textKey: 'footer.forInvestors' },
        { to: 'https://b2b.kcell.kz/ru/article/for-partners', textKey: 'footer.forPartners' },
        { to: 'https://b2b.kcell.kz/ru/product/archive-b2b', textKey: 'footer.archiveOfGoodsAndServices' },
    ];

    const becomeCorporateClientLinks: { to: string; textKey: FooterTextKey }[] = [
        { to: 'https://b2b.kcell.kz/ru/article/2709/531', textKey: 'footer.corporateClientAdvantages' }
    ];


    return (
        <footer className={css.footer}>
            <div className={clsx(css.footerContainer, 'container')}>
                <div className={css.footerContent}>
                    <div className={css.footerHeader}>
                        <Link to="/" className={css.footerLogo}>
                            <Logo className={css.footerLogoIcon} />
                            {t('common.businessBigData')}
                        </Link>

                        <button
                            className={clsx(css.footerToggler, {
                                [css.active]: !isOpen,
                            })}
                            onClick={handleToggle}
                            aria-expanded={isOpen}
                        >
                            <ChevronDown />
                        </button>
                    </div>

                    <div className={clsx(css.footerBody, {
                        [css.active]: !isOpen,
                    })}
                        ref={footerBodyRef}
                    >
                        <div className={css.footerColumns}>


                            <div className={css.footerColumn}>
                                <div
                                    className={clsx(css.footerColumnCaption, {
                                        [css.active]: isAboutOpen,
                                    })}
                                    onClick={() => handleColumnClick(toggleAbout, setIsAboutOpen)}
                                >
                                    {t('footer.aboutCompany')}
                                    <ArrowDown className={css.footerColumnCaptionIcon} />
                                </div>
                                <div ref={aboutRef} className={css.footerColumnBody}>
                                    <ul className={css.footerColumnList} >
                                        {aboutCompanyLinks.map((link, index) => (
                                            <li key={index} className={css.footerColumnItem}>
                                                <Link
                                                    to={link.to}
                                                    target='_blank'
                                                    className={css.footerColumnLink}>
                                                    {t(link.textKey)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className={css.footerColumn}>
                                <div
                                    className={clsx(css.footerColumnCaption, {
                                        [css.active]: isClientsOpen,
                                    })}
                                    onClick={() => handleColumnClick(toggleClients, setIsClientsOpen)}
                                >
                                    {t('footer.forClients')}
                                    <ArrowDown className={css.footerColumnCaptionIcon} />
                                </div>
                                <div ref={clientsRef} className={css.footerColumnBody}>
                                    <ul className={css.footerColumnList} >
                                        {forClientsLinks.map((link, index) => (
                                            <li key={index} className={css.footerColumnItem}>
                                                <Link to={link.to} className={css.footerColumnLink}>
                                                    {t(link.textKey)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className={css.footerColumn}>
                                <div
                                    className={clsx(css.footerColumnCaption, {
                                        [css.active]: isCorporateOpen,
                                    })}
                                    onClick={() => handleColumnClick(toggleCorporate, setIsCorporateOpen)}
                                >
                                    {t('footer.becomeCorporateClient')}
                                    <ArrowDown className={css.footerColumnCaptionIcon} />
                                </div>
                                <div ref={corporateRef} className={css.footerColumnBody}>
                                    <ul className={css.footerColumnList} >
                                        {becomeCorporateClientLinks.map((link, index) => (
                                            <li key={index} className={css.footerColumnItem}>
                                                <Link to={link.to} className={css.footerColumnLink}>
                                                    {t(link.textKey)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className={clsx(css.footerColumn, css.onlyDesktop)}>
                                <div className={css.footerColumnCaption}>
                                    {t('footer.forCorporateClients')}
                                </div>
                                <ul className={css.footerColumnList}>
                                    <li className={css.footerColumnItem}>
                                        <div className={css.footerColumnText}>
                                            {t('footer.serviceQuestions')}
                                        </div>
                                        <div className={css.footerColumnContacts}>
                                            <div className={css.footerColumnContact}>
                                                <a href='tel:9099'>9099</a>, <a href='tel:+77272587021'>+7 727 258 7021</a>
                                            </div>
                                            <a href="mailto:email@kcell.kz" className={css.footerColumnContact}>
                                                email@kcell.kz
                                            </a>
                                            <a href="tel:+77272584774" className={css.footerColumnContact}>
                                                +7 727 258 4774
                                            </a>
                                            <a href="mailto:business@kcell.kz" className={css.footerColumnContact}>
                                                business@kcell.kz
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className={css.footerBottom}>
                        <div className={css.footerCopy}>{t('footer.copyright')}</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
