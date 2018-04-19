import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import Question from '../components/Question'
import Map from '../components/Map'
import ImageGallery from '../components/ImageGallery'

import AgeIcon from '../components/Icons/Age'
import CalendarIcon from '../components/Icons/Calendar'
import TimeIcon from '../components/Icons/Time'

import mainImage from '../static/smena-1-inside.jpg'
import image1 from '../static/smena-1-1.jpg'
import image2 from '../static/smena-1-2.jpg'
import image3 from '../static/smena-1-3.jpg'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  container: {
    paddingTop: 140,
    color: colors.brown,
    lineHeight: 1.3,
  },
  content: {
    maxWidth: dimensions.maxWidth,
    fontSize: fonts.size.m,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftCol: {
    maxWidth: 740,
  },
  rightCol: {
    position: 'relative',
    width: 250,
  },
  textBlock: {
    margin: '30px 0',
  },
  text: {
    fontSize: fonts.size.m,
  },
  smallText: {
    fontSize: fonts.size.xs,
  },
  title: {
    fontSize: fonts.size.xxl - 7,
    color: colors.orange,
    marginBottom: 50,
    marginTop: 40,
    lineHeight: 1,
  },
  highlight: {
    color: colors.orange,
  },
  highlightBlock: {
    backgroundColor: colors.lightBlue,
    padding: '60px 30px',
    margin: '50px 0',
    textAlign: 'center',
  },
  image: {
    width: '100%',
  },
  list: {
    '& > li': {
      margin: '10px 0',
    }
  },
  timeTable: {
    display: 'flex',
    fontSize: fonts.size.xs,
    '& p': {
      marginBottom: 10,
    },
  },
  tableLeft: {
    marginRight: 90,
  },
  apply: {
    width: 245,
    padding: '25px 17px',
    backgroundColor: colors.orange,
    fontSize: fonts.size.xxs,
    color: colors.black,
    position: 'fixed',
  },
  applyTitle: {
    fontSize: fonts.size.xs,
    maxWidth: '90%',
  },
  applySubtl: {
    color: colors.white,
  },
  applyInfoChild: {
    display: 'flex',
    alignItems: 'center',
    margin: '8px 0',
  },
  applyInfoText: {
    display: 'inline-block',
    marginLeft: 30,
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    marginTop: 20,
    fontSize: fonts.size.xs,
    backgroundColor: colors.lightBlue,
    color: colors.white,
    transition: 'all ease 0.2s',
    '&:hover': {
      backgroundColor: colors.white,
      color: colors.black,
      borderColor: 'transparent',
    },
  },
}

const IndexPage = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.content}>
      <div className={classes.leftCol}>
        <p className={classes.text}>Летняя смена для подростков</p>
        <p
          className={classes.title}
          style={{ marginTop: 0 }}
        >
          Город сотрудничества
        </p>
        <p className={`${classes.text} ${classes.textBlock}`}>
          Каждая выездная программа ГЕРОЕВ имеет основную тематику и направлена на развитие у ребенка конкретных навыков. На нашей первой летней смене дети попадут в настоящую страну «Сотрудничества». Слышали про такую?
          <br />
          <br />
          Там ребята встретятся лицом к лицу с неожиданными сюрпризами и препятствиями, выполнить которые они смогут только вместе —
          <span className={classes.highlight}> одной командой! </span>
          Пройти все испытания и задания им поможет взаимовыручка, умение договариваться и работать в команде. Детей ждет много впечатлений, общения и хорошего настроения!
        </p>
        <div className={classes.highlightBlock}>
          Цель программы: формирование у ребят коммуникативных навыков и умения сотрудничать.
        </div>
        <p className={`${classes.text} ${classes.textBlock}`}>
          Каждый день наших детей окружает большое количество людей – одноклассники, учителя, родители, друзья со двора, знакомые на дополнительных занятиях. В современном мире умение договариваться  и сотрудничать становится крайне необходимым навыком. Этому мы и посвятим нашу программу.
        </p>
        <img src={mainImage} className={classes.image} />
        <p className={classes.title}>На программе участники:</p>
        <ul className={`${classes.list} ${classes.text} ${classes.textBlock}`}>
          <li>→ узнают как успешно разрешать конфликты</li>
          <li>→ научатся договариваться</li>
          <li>→ получат опыт успешного общения</li>
          <li>→ научатся взаимодействовать в команде</li>
          <li>→ узнают как находить общий язык с окружающими</li>
        </ul>
        <div className={classes.highlightBlock}>
          Абсолютное преимущество всех выездных программ ГЕРОИ является совмещение интеллектуальных тренингов и физических занятий на отработку базовых навыков жизнедеятельности.
        </div>
        <p className={classes.title}>Участников ждут:</p>
        <ul className={`${classes.list} ${classes.text} ${classes.textBlock}`}>
          <li>→ тренинги и творческие мастер-классы</li>
          <li>→ командные и индивидуальные задания и игры на отработку базовых навыков жизнедеятельности</li>
          <li>→ плавание, спортивные игры</li>
          <li>→ отдых, кинопросмотры, вечерние песни у костра, смех и радость</li>
          <li>→ максимальная реалистичность военно-тактических игр и занятий</li>
          <li>→ работа в команде с опытными инструкторами-офицерами спецназа</li>
          <li>→ свободное время, когда каждый участник сам сможет организовать и выбрать занятие по душе для себя и других участников</li>
        </ul>
        <p className={classes.title}>Базовые навыки жизнедеятельности</p>
        <p className={`${classes.text} ${classes.textBlock}`}>
          Для отработки базовых навыков жизнедеятельности и закрепления теории мы вместе с опытными инструкторами окунемся в реалистично созданную игру, на которой участники:
        </p>
        <ul className={`${classes.list} ${classes.text} ${classes.textBlock}`}>
          <li>→  получат базовые знания огневой подготовки (основы сборки и тренировка)</li>
          <li>→ узнают о технологии передвижения на горной и высотной местности (переправа через реку, вязание узлов, техника безопасности)</li>
          <li>→ приобретут специальные навыки разведчика (наблюдения и маскировки)</li>
          <li>→ узнают о правилах поведения в современной городской среде (в том числе в экстренных ситуациях) и дикой природе (разжигание костра, добывание воды и приготовление пищи), оказание первой медицинской помощи</li>
        </ul>
        <p className={classes.smallText}>
          * Все физические занятия будут проводиться с учетом возрастных особенностей детей и уровня их физической подготовки.
        </p>
        <div className={classes.highlightBlock}>
          Участие ребенка в программе поможет улучшить общение с друзьями и взрослыми. Успешно взаимодействовать на командных занятиях и творческих проектах, лучше понимать других и находить новых друзей.
        </div>
        <p className={classes.title}>Распорядок дня</p>
        <div className={classes.timeTable}>
          <div className={classes.tableLeft}>
            <p>8.00</p>
            <p>8.30</p>
            <p>8.50</p>
            <p>9.30</p>
            <p>10.00</p>
            <p>11.30</p>
            <p>13.00</p>
            <p>13.30</p>
            <p>15.30</p>
            <p>16.00</p>
            <p>19.00</p>
            <p>19.30</p>
            <p>20.00</p>
            <p>21.30</p>
            <p>22.00</p>
            <p>22.30</p>
          </div>
          <div className={classes.tableRight}>
            <p>Подъем</p>
            <p>Зарядка / Общий сбор (план на день)</p>
            <p>Личная гигиена / наведение порядка в комнате</p>
            <p>Завтрак</p>
            <p>Интеллектуальные тренинги по группам</p>
            <p>Спортивные мероприятия</p>
            <p>Обед</p>
            <p>Личное время / отдых </p>
            <p>Полдник</p>
            <p>Базовые навыки жизнедеятельности / подведение итогов</p>
            <p>Личное время</p>
            <p>Ужин</p>
            <p>Кино / творчество / дискотека</p>
            <p>Сбор по группам, подведение итогов дня</p>
            <p>Подготовка ко сну</p>
            <p>Отбой</p>
          </div>
        </div>
        <p className={classes.title}>Место</p>
        <p className={`${classes.text} ${classes.textBlock}`}>
          Наша программа пройдет на территории оздоровительной базы отдыха «Боровое».
          <br style={{ lineHeight: 1.8 }} />
          База отдыха расположена на берегу реки Шерна, вдали от городского шума и суеты, среди густогохвойного леса, с его чистым воздухом.
          <br style={{ lineHeight: 1.8 }} />
          Участники программы будут жить в комфортабельных номерах со всеми удобствами.
        </p>
        <div style={{
          display: 'flex',
          fontSize: fonts.size.xxs,
          marginBottom: 50,
        }}>
          <div style={{ maxWidth: 285, marginRight: 50 }}>
            <p className={classes.highlight}>Адрес</p>
            <p>Московская область, Ногинский район, д. Большое Буньково</p>
          </div>
          <div style={{ maxWidth: 285 }}>
            <p className={classes.highlight}>Безопасность</p>
            <p>Лагерь расположен на огороженной, строго охраняемой территории,куда не допускаются посторонние.</p>
          </div>
        </div>
        <div style={{ margin: '45px 0' }}>
          <Map />
        </div>
        <ImageGallery
          images={[
            { original: image1 },
            { original: image2 },
            { original: image3 },
          ]}
        />
        <p className={classes.title}>Организация</p>
        <div>
          <Question
            question="Здоровье"
            answer="На каждой нашей выездной программе круглосуточно работает врач, который внимательно относится к состоянию здоровья всех участников. При необходимости, будет оказана быстрая и профессиональная медицинская помощь. Пожалуйста, если у вашего ребенка есть ограничения в питании, предупредите нас об этом заранее с уточнением, какие продукты ребенку противопоказаны! Также сообщите нам, если есть важная информация о здоровье ребенка (например, аллергические реакции)."
          />
          <Question
            question="Безопасность"
            answer="Безопасность каждого участника — зона нашей особой ответственности и внимательнейшей проработки. На огороженную, строго охраняемую территорию с видеонаблюдением допускаются только официально зарегистрированные лица. Дети размещаются в отдельном корпусе и перемещаются по территории лагеря только в сопровождении вожатых и инструкторов. За безопасность ваших детей круглосуточно отвечают инструкторы — ветераны спецназа."
          />
          <Question
            question="Дорога на программу"
            answer="Для перевозки детей из Москвы к месту отдыха организованы автобусы."
          />
          <Question
            question="Питание"
            answer="Пятиразовое. Если у вашего ребенка есть ограничения в питании, предупредите нас об этом заранее с уточнением, какие продукты ребенку противопоказаны!"
          />
          <Question
            question="Необходимые документы для ребенка"
            answer={`
              • Копия полиса обязательного медицинского страхования<br>
              • Медицинская справка отъезжающего в лагерь<br>
              • Копия паспорта /свидетельства о рождении<br>
              • Копия полиса обязательного медицинского страхования<br>
              • Анкета участника (заполняется родителем о ребенке)<br>
              • Договор<br>
            `}
          />
        </div>
      </div>
      <div className={classes.rightCol}>
        <div className={classes.apply}>
          <p className={classes.applySubtl}>Летняя смена для подростков</p>
          <p className={classes.applyTitle}>Город сотрудничества</p>
          <div style={{ margin: '40px 0' }}>
            <p className={classes.applyInfoChild}>
              <AgeIcon
                color={colors.black}
                width={22}
                className={classes.icon}
              />
              <span className={classes.applyInfoText}>10–13 лет</span>
            </p>
            <p className={classes.applyInfoChild}>
              <CalendarIcon
                color={colors.black}
                width={22}
                className={classes.icon}
              />
              <span className={classes.applyInfoText}>1–14 июня</span>
            </p>
            <p className={classes.applyInfoChild}>
              <TimeIcon
                color={colors.black}
                width={22}
                className={classes.icon}
              />
              <span className={classes.applyInfoText}>14 дней</span>
            </p>
          </div>
          <p className={classes.applySubtl}>Стоимость</p>
          <p className={classes.applyTitle}>49 900 рублей</p>
          <Link
            to="/"
            className={classes.button}
          >
            Отправить заявку
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(IndexPage)
