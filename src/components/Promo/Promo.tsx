import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import css from './Promo.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';

import ArrowNext from 'src/icons/ArrowNext.svg?react';
import ArrowPrev from 'src/icons/ArrowPrev.svg?react';

import Image1 from 'src/assets/images/promo/01.png';
import Image2 from 'src/assets/images/promo/02.png';
import Image3 from 'src/assets/images/promo/03.png';

const promoSlidesData = [
    {
        keyPrefix: 'marketingSolutionsPage.heroSection.slide1',
        image: Image1,
    },
    {
        keyPrefix: 'marketingSolutionsPage.heroSection.slide2',
        image: Image2,
    },
    {
        keyPrefix: 'marketingSolutionsPage.heroSection.slide3',
        image: Image3,
    },
];

export const Promo: FC = () => {
    const { t } = useTranslation();

    return (
        <section className={css.promo}>
            <div className={clsx(css.promoContainer, 'container')}>
                <Swiper
                    className={css.promoSlider}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: `.${css.promoSliderNext}`,
                        prevEl: `.${css.promoSliderPrev}`,
                    }}
                    pagination={{
                        el: `.${css.promoSliderPagination}`,
                        clickable: true,
                    }}
                >
                    {promoSlidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={css.promoCard}>
                                <div className={css.promoCardMain}>
                                    <div className={css.promoCardTitle}>
                                        {t(`${slide.keyPrefix}.title`)}
                                    </div>
                                    <p className={css.promoCardSubtitle}>
                                        {t(`${slide.keyPrefix}.description`)}
                                    </p>
                                    <Button
                                        className={css.promoCardBtn}
                                        type='white'
                                        rounded='small'
                                    >
                                        {t('common.readMore')}
                                    </Button>
                                </div>
                                <div className={css.promoCardImage}>
                                    <img src={slide.image} alt={t(`${slide.keyPrefix}.title`)} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className={css.promoSliderFooter}>
                        <div
                            className={clsx(css.promoSliderPagination, 'swiper-pagination')}

                        ></div>
                        <div className={css.promoSliderControls}>
                            <button className={clsx(css.promoSliderPrev, 'swiper-button-prev')}>
                                <ArrowPrev />
                            </button>
                            <button className={clsx(css.promoSliderNext, 'swiper-button-next')}>
                                <ArrowNext />
                            </button>
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};
