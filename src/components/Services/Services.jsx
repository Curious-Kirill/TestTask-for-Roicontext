import React from 'react'
import './services.css'
import Slider from '../Slider/Slider'
import ScrollingLine from '../ScrollingLine/ScrollingLine'
import figmaLogo from '../../assets/figma-logo.svg';
import serpstatLogo from '../../assets/serpstat-logo.svg';
import seRankingLogo from '../../assets/seRanking-logo.svg';
import keyCollector from '../../assets/keyCollector-logo.svg';
import googleAnalyticsLogo from '../../assets/googleAnalytics-logo.svg';
import googleAdsLogo from '../../assets/googleAds-logo.svg';
import yaMetrikaLogo from '../../assets/yaMetrika-logo.svg';
import yaDirectLogo from '../../assets/yaDirect-logo.svg';
import roistatLogo from '../../assets/roistat-logo.svg';


export default function Services() {
  
  return (
    <div className="services">

      <ScrollingLine items={topLineItems}/>

      <section>
        <div className='servicesHeader'>
          <div
          className='servicesHeader-h1container'>
            <h1>услуги</h1>
          </div>
          <p>Мы оказываем комплекс различных услуг и предоставляем широкий выбор пактов - от разовых 
  до полного сопровождения группы проектов по всем направлениям.</p>
        </div>
        <div aria-label="Слайдер с описанием услуг которые оказываются нашей фирмой" className="services_slider">
          <Slider cards={cards}/>
        </div>
      </section>
     
      <ScrollingLine items={bottomLineItems}/>
    </div>
  )
}

const topLineItems = [
  <img src={figmaLogo} alt="Логотип Figma"/>,
  <img src={serpstatLogo} alt="Логотип Serpstat"/>,
  <img src={seRankingLogo} alt="Логотип SeRanking"/>,
  <img src={keyCollector} alt="Логотип SeRanking"/>,
  <img src={googleAnalyticsLogo} alt="Логотип SeRanking"/>,
  <img src={googleAdsLogo} alt="Логотип GoogleAds"/>,
  <img src={yaMetrikaLogo} alt="Логотип YandexMetrika"/>,
  <img src={yaDirectLogo} alt="Логотип YandexDirect"/>,
  <img src={roistatLogo} alt="Логотип SeRanking"/>,
  <span className='scrollLine_italicText-highlighted'>используем множество инструментов</span>,
];


const bottomLineItems = [
<span className='scrollLine_italicText-highlighted'>создаем с нуля</span>,
<span className='scrollLine_italicText'>кампании</span>,
<span className='scrollLine_italicText'>медипланы</span>,
<span className='scrollLine_italicText'>интеграции</span>,
<span className='scrollLine_italicText'>ux</span>,
<span className='scrollLine_italicText'>сайты</span>,
<span className='scrollLine_italicText-highlighted'>создаем с нуля</span>,
<span className='scrollLine_italicText'>стратегии</span>,
<span className='scrollLine_italicText'>кампании</span>,
<span className='scrollLine_italicText'>медипланы</span>,
<span className='scrollLine_italicText'>интеграции</span>,
<span className='scrollLine_italicText'>отчеты</span>,
<span className='scrollLine_italicText'>ux</span>,
<span className='scrollLine_italicText'>сайты</span>,
<span className='scrollLine_italicText'>репутации</span>,
];


const cards = [
  {id:1, header:'Контекст',price:'от 85 000 Р',options:[
   'Поисковые кампании в Директе и Google Ads',
   'Кампании в РСЯ и КМС','Ретаргетинг и ремаркетинг',
   'Видеореклама в YouTube и на площадках Яндекса и Google',
   'Реклама в Google Merchant Cente',
   'Кампании с оплатой за конверсию']},
  {id:2, header:'Таргет',price:'',options:[
   'Аудит проекта и разработка медиаплана',
   'Кампании в ВКонтакте и myTarget',
   'Привлечение трафика на сайт или в группу социальной сети',
   'Кампании Lead Ads для сбора заявок прямо в соцсетях',
   'Настройка чат-бота в ВК для увеличении конверсии группы'
 ]},
  {id:3, header:'SEO',price:'',options:[
   'Ежемесячное планирование работ',
   'Внутренняя и внешняя оптимизация',
   'Ежедневный мониторинг позиций',
   'Работа с репутацией',
   'Ежемесячный отчет о результатах'
 ]},
  {id:4, header:'Разработка',price:'',options:[
   'Технические доработки сайта для повышения конверсии',
   'Создание продающей структуры и прототипирование',
   'Разработка одностраничных и многостраничных сайтов',
   'Разработка дизайн-макетов',
   'Перенос существующих сайтов и настройка различных CMS',
 ]}, 
  {id:5, header:'Веб-аналитика',price:'',options:[
   'Аудит рекламных каналов Яндекс, Google, VK, MyTarget',
   'SEO аудит и аудит репутации компании в поисковиках',
   'Аудит юзабилити с техническим заданием для программиста',
   'Настройка Яндекс.Метрики и Google Analytics'
 ]}, 
 ];
 
