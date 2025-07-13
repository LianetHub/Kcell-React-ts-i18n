import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import css from './Promo.module.scss';
import clsx from 'clsx';
import { Button } from '@ui/Button';

import ArrowNext from 'src/icons/ArrowNext.svg?react';
import ArrowPrev from 'src/icons/ArrowPrev.svg?react';

interface PromoSlide {
    title: string;
    description?: string;
    image: string;
    link?: string;
}

interface PromoProps {
    slides: PromoSlide[];
}

export const Promo: FC<PromoProps> = ({ slides }) => {
    const { t } = useTranslation();

    return (
        <section className={css.promo}>
            <div className={clsx(css.promoContainer, 'container')}>
                <Swiper
                    className={css.promoSlider}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    watchOverflow={true}
                    navigation={{
                        nextEl: `.${css.promoSliderNext}`,
                        prevEl: `.${css.promoSliderPrev}`,
                    }}
                    pagination={{
                        el: `.${css.promoSliderPagination}`,
                        clickable: true,
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={css.promoCard}>
                                <div className={css.promoCardMain}>
                                    <div className={css.promoCardTitle}>
                                        {slide.title}
                                    </div>
                                    {slide.description && (
                                        <p className={css.promoCardSubtitle}>
                                            {slide.description}
                                        </p>
                                    )}
                                    {slide.link && (
                                        <Button
                                            to={slide.link}
                                            className={css.promoCardBtn}
                                            color="white"
                                            rounded="small"
                                        >
                                            {t('common.readMore')}
                                        </Button>
                                    )}
                                </div>
                                <div className={css.promoCardImage}>
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className={css.promoSliderFooter}>
                        <div className={clsx(css.promoSliderPagination, 'swiper-pagination')} />
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
