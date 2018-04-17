import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Thesis from '../components/Thesis/Thesis'
import Card from '../components/Card/Card'
import Member from '../components/Member/Member'
import Question from '../components/Question/Question'

import heroesWhite from '../static/heroes-white.svg'
import bgImage from '../static/heroes-bg.jpg'
import brilliantImage from '../static/brilliant.png'
import mountainImage from '../static/mountain.png'
import flagImage from '../static/flags.png'
import image1 from '../static/index-img-1.jpg'
import member1 from '../static/member1.jpg'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  container: {
    paddingTop: 80,
    color: colors.brown,
  },
  cover: {
    backgroundImage: `url(${bgImage})`,
    height: 633,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: colors.white,
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  coverContent: {
    margin: 'auto',
  },
  coverTitle: {
    fontSize: fonts.size.xxl,
    marginBottom: 20,
  },
  coverSubtl: {
    fontSize: fonts.size.s,
    maxWidth: 570,
    lineHeight: 1.3,
    margin: 'auto',
    marginBottom: 30,
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    height: 45,
    fontSize: fonts.size.xs,
    backgroundColor: colors.orange,
    color: colors.black,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      color: colors.white,
      borderColor: 'transparent',
    },
  },
  content: {
    maxWidth: dimensions.maxWidth,
    margin: 'auto',
  },
  thesises: {
    display: 'flex',
    margin: '130px auto 50px',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    fontSize: fonts.size.xxxl,
  },
  subtl: {
    fontSize: fonts.size.m,
    maxWidth: 710,
    lineHeight: 1.3,
    marginTop: 30,
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 55,
    marginBottom: 80,
  },
  placeContent: {
    display: 'flex',
  },
  placeLeft: {
    width: '60%',
  },
  placeRight: {
    padding: 50,
    display: 'flex',
  },
  placeInfo: {
    fontSize: fonts.size.xxs,
    marginTop: 50,
    display: 'flex',
    lineHeight: 1.3,
    justifyContent: 'space-between',
  },
  placeInfoItem: {
    maxWidth: 290,
  },
  placeInfoTitle: {
    color: colors.orange,
    marginBottom: 20,
  },
  mapUnderlay: {
    width: 261,
    height: 404,
    backgroundColor: colors.brown,
    margin: 'auto',
  },
  sliderBlock: {
    marginTop: 70,
  },
  slider: {
    maxWidth: '100%',
  },
  sliderSubtl: {
    textAlign: 'center',
    fontSize: fonts.size.xxs,
    marginTop: 10,
  },
  teamBlock: {
    marginTop: 100,
  },
  members: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  faqBlock: {
    marginTop: 100,
  },
  questions: {
    display: 'flex',
    marginTop: 70,
  },
}

const IndexPage = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.cover}>
      <div className={classes.overlay}>
        <div className={classes.coverContent}>
          <h1 className={classes.coverTitle}>
            Летний лагерь
            <img src={heroesWhite} style={{ width: 200 }} alt="Герои" />
          </h1>
          <p className={classes.coverSubtl}>
            Две недели полной свободы от гаджетов<br />и две недели незабываемых приключений. Развитие личности в сочентании со спортивной подготовкой в Подмосковье.
          </p>
          <Link
            to="/"
            className={classes.button}
          >
            Выбрать смену
          </Link>
        </div>
      </div>
    </div>
    <div className={classes.content}>
      <div className={classes.thesises}>
        <Thesis
          image={brilliantImage}
          text="Путь к открытию ресурсов и талантов ребенка, о которых раньше никто не догадывался."
        />
        <Thesis
          image={mountainImage}
          text="Cочетание элементов физического и психо-эмоционального развития по уникальной программе."
        />
        <Thesis
          image={flagImage}
          text="Результат каждой смены — развитие уверенности в себе, лидерских качеств и умения взаимодействовать в команде."
        />
      </div>
      <p className={classes.title}>Смены</p>
      <p className={classes.subtl}>
        Каждая смена направлена на развитие определенных навыков и объединена тактической программой.
      </p>
      <div className={classes.cards}>
        <Card
          image={bgImage}
          title="Ответственность и&nbsp;принятие решений"
          text="База для воспитания настоящих лидеров, незаурядных и ярких, способных не только вдохновить, вселить истинную веру, но и повести за собой сотни"
          dates="Даты: 16 – 29 июня"
          age="Возраст: 10 – 17 лет"
        />
        <Card
          image={bgImage}
          title="Я и Мир Вокруг"
          text="Поможет по-новому взглянуть на себя, открыть, принять и продемонстрировать миру себя настоящего, талантливого, уникального."
          dates="Даты: 16 – 29 июня"
          age="Возраст: 10 – 17 лет"
        />
      </div>
      <p className={classes.title}>Место</p>
      <div className={classes.placeContent}>
        <div className={classes.placeLeft}>
          <p className={classes.subtl}>
            Наша программа пройдет на территории оздоровительной базы отдыха «Боровое».
            <br style={{ lineHeight: 1.8 }} />
            База отдыха расположена на берегу реки Шерна, вдали от городского шума и суеты, среди густогохвойного леса, с его чистым воздухом.
            <br style={{ lineHeight: 1.8 }} />
            Участники программы будут жить в комфортабельных номерах со всеми удобствами.
          </p>
          <div className={classes.placeInfo}>
            <div className={classes.placeInfoItem}>
              <p className={classes.placeInfoTitle}>Адрес</p>
              <p className={classes.placeInfoDesc}>
                Московская область, Ногинский район, д. Большое Буньково
              </p>
            </div>
            <div className={classes.placeInfoItem}>
              <p className={classes.placeInfoTitle}>Безопасность</p>
              <p className={classes.placeInfoDesc}>
                Лагерь расположен на огороженной, строго охраняемой территории,куда не допускаются посторонние.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.placeRight}>
          <div className={classes.mapUnderlay} />
        </div>
      </div>
      <div className={classes.sliderBlock}>
        <img src={image1} className={classes.slider} />
        <p className={classes.sliderSubtl}>Подпись к картинке</p>
      </div>
      <div className={classes.teamBlock}>
        <p className={classes.title}>Команда</p>
        <p className={classes.subtl}>
          Сообщество ГЕРОЕВ объединяет профессионалов от педагогов и психологов до спасателей и ветеранов спецназа.
        </p>
        <div className={classes.members}>
          <Member
            image={member1}
            name="Сергей Гуров"
            desc="Генеральный директор"
          />
          <Member
            image={member1}
            name="Сергей Гуров"
            desc="Генеральный директор"
          />
          <Member
            image={member1}
            name="Сергей Гуров"
            desc="Генеральный директор"
          />
          <Member
            image={member1}
            name="Сергей Гуров"
            desc="Генеральный директор"
          />
          <Member
            image={member1}
            name="Сергей Гуров"
            desc="Генеральный директор"
          />
        </div>
      </div>
      <div className={classes.faqBlock}>
        <p className={classes.title}>FAQ</p>
        <div className={classes.questions}>
          <div className={classes.qaColumn}>
            <Question
              question="Почему проект называется ГЕРОИ?"
              answer="Мы искренне верим, что Герой есть в каждом из нас и наша задача открыть его в каждом нашем участнике."
            />
            <Question
              question="Что такое потенциал личности и почему его нужно раскрывать?"
              answer="Потенциал личности — это способность человека к раскрытию своих внутренних ресурсов, в первую очередь — возможность эффективно взаимодействовать с окружением, быть продуктивным, успешно расти и развиваться."
            />
            <Question
              question="В чем уникальность ГЕРОЕВ?"
              answer="В наших программах органично сочетаются элементы физического и психо-эмоционального развития — уникальная возможность обогатить личность бесценным опытом и незабываемыми эмоциями."
            />
            <Question
              question="Должна ли у меня быть специальная физическая подготовка?"
              answer="Наши программы не предполагают специальной физической подготовки, вам достаточно не иметь медицинских противопоказаний, а для ребенка — посещать уроки физкультуры в школе. Конечно, любая программа предполагает спортивную активность и наши опытные инструкторы помогут вам на каждом этапе."
            />
            <Question
              question="А тренинги — это интересно?"
              answer="Тренинги у нас — это не скучные лекции, где ведущий 3 часа говорит о чем-то непонятном. Мы предлагаем вам игровой формат, с активным вовлечением каждого участника. Ни вам, ни вашему ребенку не будет скучно, гарантируем!"
            />
          </div>
          <div className={classes.qaColumn}>
            <Question
              question="Почему проект называется ГЕРОИ?"
              answer="Мы искренне верим, что Герой есть в каждом из нас и наша задача открыть его в каждом нашем участнике."
            />
            <Question
              question="Почему проект называется ГЕРОИ?"
              answer="Мы искренне верим, что Герой есть в каждом из нас и наша задача открыть его в каждом нашем участнике."
            />
            <Question
              question="Почему проект называется ГЕРОИ?"
              answer="Мы искренне верим, что Герой есть в каждом из нас и наша задача открыть его в каждом нашем участнике."
            />
            <Question
              question="Почему проект называется ГЕРОИ?"
              answer="Мы искренне верим, что Герой есть в каждом из нас и наша задача открыть его в каждом нашем участнике."
            />
            <Question
              question="Почему проект называется ГЕРОИ?"
              answer="Мы искренне верим, что Герой есть в каждом из нас и наша задача открыть его в каждом нашем участнике."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(IndexPage)
