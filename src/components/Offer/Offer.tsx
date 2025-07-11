import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Offer.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';



export const Offer: FC = () => {
    const { t } = useTranslation();

    return (
        <section className={css.offer}>
            <div className={clsx(css.offerContainer, 'container')}>
                <div className={css.offerBody}>
                    <h2 className={clsx(css.offerTitle, 'title')}>
                        {t('form.fillOutForm')}
                    </h2>
                    <form action="#" className={css.offerForm}>
                        <div className={css.offerFormFields}>
                            <Input
                                className={css.offerFormInput}
                                label={t('form.yourName')}
                                placeholder={t('form.howToAddressYou')}
                            />
                            <Input
                                className={css.offerFormInput}
                                label={t('form.phone')}
                                type='tel'
                                value={"+7"}
                            />
                        </div>
                        <Button
                            className={css.offerFormBtn}
                            color='white'
                            rounded='small'

                        >
                            {t('common.leaveRequest')}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
