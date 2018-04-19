import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import Scrollspy from 'react-scrollspy'

import Scroll from '../components/Scroll'
import Thesis from '../components/Thesis'
import Card from '../components/Card'
import Member from '../components/Member'
import Question from '../components/Question'
import Logo from '../components/Logo'
import Map from '../components/Map'

import heroesWhite from '../static/heroes-white.svg'
import bgImage from '../static/heroes-bg.jpg'
import cupImage from '../static/cup.png'
import brilliantImage from '../static/brilliant.png'
import mountainImage from '../static/mountain.png'
import pinImage from '../static/pin.png'
import image1 from '../static/index-img-1.jpg'
import smena1 from '../static/smena-1.jpg'
import smena2 from '../static/smena-2.jpg'
import smena3 from '../static/smena-3.jpg'
import smena4 from '../static/smena-4.jpg'
import smena5 from '../static/smena-5.jpg'
import smena6 from '../static/smena-6.jpg'
import member1 from '../static/member-1.jpg'
import member2 from '../static/member-2.jpg'
import member3 from '../static/member-3.jpg'
import member4 from '../static/member-4.jpg'
import member5 from '../static/member-5.jpg'

import { colors, fonts, dimensions } from '../theme'

const styles = {
  container: {
    padding: '80px 0',
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    fontSize: 44,
    maxWidth: 900,
    lineHeight: 0.5,
    margin: 'auto',
    marginBottom: 30,
  },
  button: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 60,
    marginTop: 70,
    fontSize: fonts.size.xs,
    backgroundColor: colors.orange,
    color: colors.black,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      color: colors.white,
      borderColor: 'transparent',
    },
  },
  taglineContainer: {
    backgroundColor: colors.lightBlue,
    minHeight: 345,
    padding: '50px 20px',
    display: 'flex',
  },
  tagline: {
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.3,
    color: colors.brown,
    fontSize: fonts.size.m,
    maxWidth: 815,
  },
  content: {
    maxWidth: dimensions.maxWidth,
    width: dimensions.maxWidth,
    margin: 'auto',
  },
  thesises: {
    display: 'flex',
    margin: '100px auto 65px',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    fontSize: fonts.size.xxl,
    paddingTop: 100,
    marginTop: -100,
  },
  subtl: {
    fontSize: fonts.size.xs,
    maxWidth: 650,
    lineHeight: 1.3,
    marginTop: 20,
  },
  block: {
    marginTop: 70,
  },
  cardsBlock: {
    marginTop: 55,
    marginBottom: 80,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardsSubtl: {
    textAlign: 'center',
    fontSize: fonts.size.xs,
  },
  placeContent: {
    display: 'flex',
    marginTop: 30,
  },
  placeLeft: {
    width: '60%',
  },
  placeRight: {
    padding: '30px 50px',
    display: 'flex',
  },
  placeInfo: {
    fontSize: fonts.size.xs,
    lineHeight: 1.3,
    color: colors.orange,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 450,
  },
  placeInfoIcon: {
    display: 'inline-block',
    marginRight: 20,
  },
  mapUnderlay: {
    width: 261,
    height: 404,
    margin: 'auto',
  },
  sliderBlock: {
    marginTop: 70,
  },
  slider: {
    maxWidth: '100%',
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
    justifyContent: 'space-between',
  },
  qaColumn: {
    width: '49%',
  },
  moreQuestions: {
    minHeight: 186,
    border: `4px solid ${colors.orange}`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: colors.orange,
    justifyContent: 'space-around',
    padding: 20,
    lineHeight: 1.3,
  },
  moreTitle: {
    fontSize: fonts.size.l,
  },
  moreSubtl: {
    fontSize: fonts.size.s,
  },
}

const IndexPage = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.cover}>
      <div className={classes.overlay}>
        <div className={classes.coverContent}>
          <h1 className={classes.coverTitle}>
            Летний лагерь
            <Logo style={{ height: 70, marginLeft: 25 }} />
          </h1>
          <p className={classes.coverSubtl}>
            Территория раскрытия возможностей
          </p>
          <Scroll type="id" element="smena">
            <a
              href="#"
              className={classes.button}
            >
              Выбрать смену
            </a>
          </Scroll>
        </div>
      </div>
    </div>
    <div className={classes.taglineContainer}>
      <p className={classes.tagline}>
        ГЕРОИ — это больше, чем летний детский лагерь. Значительнее, чем активный отдых на природе. Интенсивнее, чем подготовительные курсы. Ярче, чем выездной туризм. Лагерь ГЕРОИ — это среда обитания настоящего победителя.
      </p>
    </div>
    <div className={classes.content}>
      <div className={classes.thesises}>
        <Thesis
          image={cupImage}
          hightlight="Призвание нашего лагеря — "
          text="показать каждому участнику, что героем стать возможно.Наша цель — сформировать необходимые качества характера уверенного в себе и успешного человека."
        />
        <Thesis
          image={brilliantImage}
          hightlight="Раскрытие личностного потенциала детей и подростков "
          text="мы реализуем посредством уникальной методики, сочетая в программах элементы физического и психо-эмоционального развития."
        />
        <Thesis
          image={mountainImage}
          hightlight="Результат каждой смены — "
          text="развитие стойкости духа, стратегического мышления,  лидерских качеств, умения взаимодействовать в команде, и прежде всего, осознанное отношение к себе и окружающим."
        />
      </div>
      <p className={classes.title} id="smena">Смены</p>
      <p className={classes.subtl}>
        В программах сочетаются элементы физического и психо-эмоционального развития — возможность обогатиться бесценным опытом, незабываемыми эмоциями и погрузиться в захватывающие приключения. Вместе с командой дети преодолевают препятствия, формируют доверие к окружающим и уверенность в себе, здоровые привычки и навыки коммуникации.
      </p>
      <div className={classes.cardsBlock}>
        <div className={classes.cards}>
          <Card
            image={smena1}
            to="smena-1"
            title="Город Сотрудничества"
            text="Для ребят, кто хочет научиться работать в команде, выстраивать эффективные взаимоотношения с окружающими и получать от этого удовольствие."
            dates="1–14 июня"
            age="10–13 лет"
          />
          <Card
            image={smena2}
            to="smena-2"
            title="Я и Мир Вокруг"
            text="Поможет по-новому взглянуть на себя, открыть, принять и продемонстрировать миру себя настоящего, талантливого, уникального."
            dates="16–29 июня"
            age="10–17 лет"
          />
          <Card
            image={smena3}
            to="smena-3"
            title="Самостоятельность"
            text="Поможет научиться проявлять инициативу, принимать и нести ответственность за свои решения, подготовить к первым шагам взрослой независимой жизни."
            dates="1–14 июля"
            age="10–17 лет"
          />
          <Card
            image={smena4}
            to="smena-4"
            title="Воля, смелость, отвага"
            text="Для настоящих героев, кто хочет проверить свои возможности, раскрыть в себе дремлющий потенциал и уверен, что способен на большее."
            dates="16–29 июля"
            age="10–17 лет"
          />
          <Card
            image={smena5}
            to="smena-5"
            title="Ответственность и&nbsp;принятие решений"
            text="Раскроет секреты, как управлять собственной жизнью, пользоваться уважением взрослых и восхищением сверстников."
            dates="31 июля–13 августа"
            age="10–17 лет"
          />
          <Card
            image={smena6}
            to="smena-6"
            title="Путешествие к развитию личности"
            text="База для воспитания настоящих лидеров, незаурядных и ярких, способных не только вдохновить, но и повести за собой сотни людей к победе."
            dates="15–28 августа"
            age="10–17 лет"
          />
        </div>
        <p className={classes.cardsSubtl}>
          Не знаете, какую смену выбрать? Позвоните +7  499  450  56  06 — мы проконсультируем.
        </p>
      </div>
      <div className={classes.teamBlock}>
        <p className={classes.title} id="team">Наша команда</p>
        <p className={classes.subtl}>
          В нашем авангарде исключительной храбрости и геройства — опытные наставники, которые полностью обеспечивают безопасность и эффективность проекта. От педагогов и психологов до спасателей и ветеранов спецназа, сообщество ГЕРОЕВ объединяет профессионалов c многолетним стажем работы с детьми и в социальной сфере.
        </p>
        <div className={classes.members}>
          <Member
            image={member1}
            name="Сергей Гуров"
            desc="Генеральный директор"
          />
          <Member
            image={member2}
            name="Наталья Карпова"
            desc="Креативный директор"
          />
          <Member
            image={member3}
            name="Елена Журавлева"
            desc="Директор по развитию"
          />
          <Member
            image={member4}
            name="Ольга Папкова"
            desc="Руководитель образовательных программ"
          />
          <Member
            image={member5}
            name="Евгений Дорошенко"
            desc="Руководитель выездных программ"
          />
        </div>
      </div>
      <div className={classes.block}>
        <p className={classes.title} id="place">Место проведения</p>
        <div className={classes.placeContent}>
          <div className={classes.placeLeft}>
            <p className={classes.subtl}>
              Боровое — одно из самых красивых и экологически чистых мест Подмосковья, расположенное в 60 км к северо-востоку от Москвы.
              <br style={{ lineHeight: 2.5 }} />
              База отдыха находится на берегу реки Шерна, вдали от городского шума и суеты. Для юных героев здесь созданы все условия для фантастических приключений в дали от гаджетов. Наслаждение активным отдыхом на свежем воздухе происходит среди густого хвойного леса и живописных песчанных пляжей, и ручьев с кристально чистой родниковой водой.
              <br style={{ lineHeight: 2.5 }} />
              Лагерь отличается повышенной безопасностью. На огороженную, строго охраняемую территорию допускаются только официально зарегистрированные лица.
            </p>
          </div>
          <div className={classes.placeRight}>
            <div className={classes.mapUnderlay}>
              <Map />
            </div>
          </div>
        </div>
        <div className={classes.placeInfo}>
          <img src={pinImage} height={65} className={classes.placeInfoIcon} />
          Московская область, Ногинский район, деревня Большое Буньково
        </div>
      </div>
      <div className={classes.sliderBlock}>
        <img src={image1} className={classes.slider} />
      </div>
      <div className={classes.faqBlock}>
        <p className={classes.title} id="faq">Ответы на вопросы</p>
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
              answer="Каждая программа ГЕРОЕВ направлена на физическое развитие ребенка и приобретение конкретных навыков, знаний и умений. Абсолютное преимущество всех выездных программ является совмещение интеллектуальных занятий и спортивных игр на развитие жизненных навыков. Ребята смогут оценить и утвердить свои силы, поработать над уверенностью, проверить свои способности, прочувствовать свой характер, проявить силу духа и подружиться с друг другом."
            />
            <Question
              question="На какой возраст рассчитана смены?"
              answer="Наши смены адаптированы для детей 10-17 лет. Для подробного ознакомления с программами, читать здесь. Выбирайте любую и можете быть уверены, что вашему ребенку понравится."
            />
            <Question
              question="Что в итоге получат участники?"
              answer="По истечению двух недель приключений, которым позавидуют супергерои, и открытий своих истинных талантов, у юных участников программы вырабатывается новая модель поведения. Участие в летних сменах поможет Героям обрести уверенность в себе и новые навыки, которые лягут в основу становления себя как лидера и ответственного понимания своей роли в обществе. Качества, на формирование которых направлены наши программы: лидерство, уверенность в себе и самостоятельность, отвага, уважение, стратегическое мышление и целеустремлённость, физическая подготовка, навык здорового образа жизни, стрессоустойчивость и выносливость, эмпатическая коммуникация и слушание, экстраверсия, навык принятия решений, ориентирование на местности, инновационные идеи и креативность, забота об окружающей среде и социально-ответственное поведение."
            />
            <Question
              question="Должна ли у моего ребенка быть специальная физическая подготовка?"
              answer="Наши программы не предполагают специальной физической подготовки. Ребенку достаточно не иметь серьезных медицинских противопоказаний, и посещать уроки физкультуры в школе. Конечно, любая программа предполагает спортивную активность и наши опытные инструкторы, которые также также обладают навыком первой медицинской помощи, помогут на каждом этапе."
            />
            <Question
              question="Что ожидать в спортивной части программы?"
              answer="Спортивная часть программы самая захватывающая, эмоциональная и наполнена яркими впечатлениями для участников! Ребята будут преодолевать горные вершины, добывать воду, учиться разводить костер и готовить пищу, ориентироваться на местности и многое другое. Спортивная часть программы дает возможность в реалистичной форме проработать знания, полученные в  ходе выполнения интелектуальных задач."
            />
            <Question
              question="Как обеспечивается безопасность лагеря?"
              answer="Безопасность каждого Героя – зона нашей особой ответственности и внимательнейшей проработки. На огороженную, строго охраняемую территорию с видеонаблюдением допускаются только официально зарегистрированные лица. За безопасность ваших детей круглосуточно отвечают инструкторы — ветераны спецназа."
            />
          </div>
          <div className={classes.qaColumn}>
            <Question
              question="Из чего складывается стоимость лагеря?"
              answer="Лагерь ГЕРОИ – это сочетание комфортных условий проживания детей для качественного отдыха; здорового, вкусного, специально продуманного 5-разового питания; высокого уровня квалификации команды и безопасности. Но главное – это уникальная продуманная программа, над которой трудились профессиональные педагоги, психологи и инструкторы-ветераны спецназа. Именно комплексный подход к ее формированию позволяет обеспечить незабываемые впечатления для каждого ребенка, помочь ему обрести опыт и навыки, недоступные в городской среде, а в первую очередь – вернуться домой энергичным, неравнодушным, целеустремленным, самостоятельным, уверенным в себе и жизнерадостным. "
            />
            <Question
              question="Каковы бытовые условия для проживания детей?"
              answer="Мы предлагаем для участников летнего лагеря ГЕРОИ комфортное 3-х местное размещение в комфортабельных номерах базы отдыха «Боровое». В каждом номере свой туалет и душ. Девочки обязательно размещаются отдельно. Организовано 5-разовое питание, формируется специальное меню с учетом высокой активности программы и при необходимости - особой диеты участников.   В лагере круглосуточно находится врач-педиатр, а в стоимость смены включено страхование от несчастных случаев."
            />
            <Question
              question="Каковы требования к спортивной форме для активной части программы?"
              answer="Участников ждут настолько активные приключения, что специальная одежда просто необходима! Поэтому все Герои получают идеально подходящую для занятий специальную экипировку в подарок.    "
            />
            <Question
              question="В чем отличие программ лагеря ГЕРОИ от других военно-спортивных детских лагерей?"
              answer="Каждая наша программа ориентирована на развитие эмоционального интеллекта и приобретение универсальных навыков жизнедеятельности, которые помогут вашему ребенку справляться с городскими стрессами и выстраивать успешную коммуникацию со сверстниками и взрослыми.  Еще одна «фишка» лагеря – реалистичный эффект присутствия, который создается безопасными для детей пиротехническими имитационными средствами, использующимися во время проведения тактических игр и квестов."
            />
            <Question
              question="Кто входит в команду лагеря?"
              answer="С вашими детьми работают педагоги с многолетним опытом работы и инструкторы-ветераны спецназа. С каждой возрастной группой (6-7 человек) работает отдельный педагог и инструктор. Тренинговая программа составлена и проводится тренерами с психологическим образованием и многолетним опытом работы с детьми."
            />
            <Question
              question="Что такое спортивно-тактические игры?"
              answer="Спортивно-тактические игры представляют собой сочетание различных блоков заданий, таких как физическая, тактико-специальная, горно-высотная, огневая подготовка, основы выживания, и правила безопасного поведения в экстренных городских ситуациях. Такой комплекс позволяет развить внимание, скорость реакции, стрессоустойчивость, быструю адаптацию организма к изменению обстановки, быстро интуитивно мыслить в стрессовой обстановке, анализировать ситуацию, умение работать в команде, развивает стратегическое мышление и лидерские качества, уверенность в себе, решительность, смелость, самостоятельность, ответственность за принятие решений."
            />
            <div className={classes.moreQuestions}>
              <p className={classes.moreTitle}>Остались вопросы?</p>
              <p className={classes.moreSubtl}>Звоните
                <br />
                +7 499 450 56 06
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(IndexPage)
