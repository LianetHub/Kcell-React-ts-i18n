import { FC } from 'react';
import css from './Footer.module.scss';
import clsx from 'clsx';


export const Footer: FC = () => {


    return (
        <footer className={css.footer}>
            <div className={clsx(css.footerContainer, 'container')}>
                <div className={css.footerBody}>

                </div>
            </div>
        </footer>
    );
}