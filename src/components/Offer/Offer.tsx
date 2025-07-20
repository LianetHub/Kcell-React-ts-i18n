import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './Offer.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';

interface OfferProps {
    title?: string;
}

export const Offer: FC<OfferProps> = ({ title }) => {
    const { t } = useTranslation();

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('+7');
    const [email, setEmail] = useState<string>('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            name: name,
            phone: phone,
            email: email,
        };

        console.log('Данные формы для отправки:', formData);
    };

    return (
        <section id='offer' className={css.offer}>
            <div className={clsx(css.offerContainer, 'container')}>
                <div className={css.offerBody}>
                    <h2 className={clsx(css.offerTitle, 'title')}>
                        {title || t('form.fillOutForm')}
                    </h2>
                    <form onSubmit={handleSubmit} className={css.offerForm}>
                        <div className={css.offerFormFields}>
                            <Input
                                className={css.offerFormInput}
                                label={t('form.yourName')}
                                placeholder={t('form.howToAddressYou')}
                                value={name}
                                onChange={handleNameChange}
                            />
                            <Input
                                className={css.offerFormInput}
                                label={t('form.phone')}
                                type='tel'
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                            <Input
                                className={css.offerFormInput}
                                label={t('form.email')}
                                placeholder={t('form.emailPlaceholder')}
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <Button
                            className={css.offerFormBtn}
                            color='white'
                            rounded='small'
                            type='submit'
                        >
                            {t('common.leaveRequest')}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};