import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from './Footer.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/images/logo.svg?react';
import ChevronDown from 'src/icons/ChevronDown.svg?react';
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
    | 'footer.leaveRequest'
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

    const handleToggle = () => {
        slideToggle();
        setIsOpen((prev) => !prev);
    };

    const footerMenuItems: { to: string; textKey: FooterTextKey }[] = [
        { to: '/page', textKey: 'footer.forInvestors' },
        { to: '/page', textKey: 'footer.forPartners' },
        { to: '/page', textKey: 'footer.forClients' },
    ];

    const aboutCompanyLinks: { to: string; textKey: FooterTextKey }[] = [
        { to: '/', textKey: 'footer.aboutCompany' },
        { to: '/', textKey: 'footer.successStory' },
        { to: '/', textKey: 'footer.careersInKcell' },
        { to: '/', textKey: 'footer.procurements' },
        { to: '/', textKey: 'footer.policies' },
        { to: '/', textKey: 'footer.responsibleBusiness' },
        { to: '/', textKey: 'footer.publicOfferAgreement' },
    ];

    const forClientsLinks: { to: string; textKey: FooterTextKey }[] = [
        { to: '/', textKey: 'footer.news' },
        { to: '/', textKey: 'footer.pressCenter' },
        { to: '/', textKey: 'footer.frequentlyAskedQuestions' },
        { to: '/', textKey: 'footer.forInvestors' },
        { to: '/', textKey: 'footer.forPartners' },
        { to: '/', textKey: 'footer.archiveOfGoodsAndServices' },
    ];

    const becomeCorporateClientLinks: { to: string; textKey: FooterTextKey }[] = [
        { to: '/', textKey: 'footer.corporateClientAdvantages' },
        { to: '/', textKey: 'footer.leaveRequest' },
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

                        <nav className={css.footerMenu}>
                            <ul className={css.footerMenuList}>
                                {footerMenuItems.map((item, index) => (
                                    <li key={index} className={css.footerMenuItem}>
                                        <Link to={item.to} className={css.footerMenuLink}>
                                            {t(item.textKey)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

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
                                <div className={css.footerColumnCaption}>
                                    {t('footer.aboutCompany')}
                                </div>
                                <ul className={css.footerColumnList}>
                                    {aboutCompanyLinks.map((link, index) => (
                                        <li key={index} className={css.footerColumnItem}>
                                            <Link to={link.to} className={css.footerColumnLink}>
                                                {t(link.textKey)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={css.footerColumn}>
                                <div className={css.footerColumnCaption}>
                                    {t('footer.forClients')}
                                </div>
                                <ul className={css.footerColumnList}>
                                    {forClientsLinks.map((link, index) => (
                                        <li key={index} className={css.footerColumnItem}>
                                            <Link to={link.to} className={css.footerColumnLink}>
                                                {t(link.textKey)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={css.footerColumn}>
                                <div className={css.footerColumnCaption}>
                                    {t('footer.becomeCorporateClient')}
                                </div>
                                <ul className={css.footerColumnList}>
                                    {becomeCorporateClientLinks.map((link, index) => (
                                        <li key={index} className={css.footerColumnItem}>
                                            <Link to={link.to} className={css.footerColumnLink}>
                                                {t(link.textKey)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={css.footerColumn}>
                                <div className={css.footerColumnCaption}>
                                    {t('footer.forCorporateClients')}
                                </div>
                                <ul className={css.footerColumnList}>
                                    <li className={css.footerColumnItem}>
                                        <div className={css.footerColumnText}>
                                            {t('footer.serviceQuestions')}
                                        </div>
                                        <div className={css.footerColumnContacts}>
                                            <a href="tel:+77272587021" className={css.footerColumnContact}>
                                                9099, +7 727 258 7021
                                            </a>
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

                    <div className={css.footerLicense}>
                        {t('footer.licenseText')}
                    </div>

                    <div className={css.footerBottom}>
                        <div className={css.footerCopy}>{t('footer.copyright')}</div>
                        <div className={css.footerPolicies}>
                            <Link to="/" className={css.footerPoliciesLink}>
                                {t('footer.privacyPolicy')}
                            </Link>
                            <Link to="/" className={css.footerPoliciesLink}>
                                {t('footer.publicOfferAgreement')}
                            </Link>
                        </div>
                        <div className={css.footerService}>
                            {t('footer.serviceContact')}
                            <a href="tel:+77272587021" className={css.footerServicePhone}>
                                +7 (727) 258–70–21 / 9099
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
