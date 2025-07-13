import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/app.scss';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './i18n';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
