import React, { Component } from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import cx from 'classnames'
import { Player, BigPlayButton } from 'video-react'
import 'video-react/dist/video-react.css'

import Thesis from '../components/Thesis'
import Card from '../components/Card'
import Member from '../components/Member'
import Question from '../components/Question'
import Logo from '../components/Logo'
import Map from '../components/Map'
import ImageGallery from '../components/ImageGallery'
import Phone from '../components/Phone'
import Video from '../components/Video'
import CrossIcon from '../components/Icons/Cross'

import heroesWhite from '../static/heroes-white.svg'
import rassrochka from '../static/rassrochka.svg'
import bgImage from '../static/heroes-bg.jpg'
import cupImage from '../static/cup.png'
import brilliantImage from '../static/brilliant.png'
import mountainImage from '../static/mountain.png'
import pinImage from '../static/pin.png'
import member1 from '../static/member-1.jpg'
import member2 from '../static/member-2.jpg'
import member3 from '../static/member-3.jpg'
import member4 from '../static/member-4.jpg'
import member5 from '../static/member-5.jpg'
import member6 from '../static/member-6.jpg'
import image1 from '../static/smena-1-1.jpg'
import image2 from '../static/smena-1-2.jpg'
import image3 from '../static/smena-1-3.jpg'
import image4 from '../static/smena-1-4.jpg'
import videoCover from '../static/main-video-cover.jpg'
import mainVideo from '../static/7.mp4'

import { colors, fonts, dimensions, media } from '../theme'

import { SMENAS } from '../config/smena-apply'

const styles = {
  container: {
    color: colors.brown,
  },
  cover: {
    backgroundImage: `url(${bgImage})`,
    height: 733,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: colors.white,
    textAlign: 'center',
    [media.lessThan('medium')]: {
      height: 600,
    },
    [media.lessThan('small')]: {
      height: 533,
    },
    [media.lessThan('xsmall')]: {
      height: 500,
    },
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  coverContent: {
    margin: 'auto',
    [media.lessThan('large')]: {
      padding: '0 15px',
    },
    [media.lessThan('small')]: {
      padding: '0 15px',
      lineHeight: 1.15,
    },
  },
  coverTitle: {
    fontSize: fonts.size.xxl,
    marginTop: -200,
    marginBottom: 20,
    maxWidth: dimensions.maxWidth,
    [media.lessThan('large')]: {
      fontSize: fonts.size.xxl - 20,
    },
    [media.lessThan('medium')]: {
      marginTop: -210,
      fontSize: fonts.size.xl + 25,
    },
    [media.lessThan('small')]: {
      marginTop: -110,
      fontSize: fonts.size.xl + 15,
    },
    [media.lessThan('xsmall')]: {
      marginTop: -90,
    },
  },
  coverSubtl: {
    lineHeight: 1.2,
    fontSize: fonts.size.s,
    fontSize: 44,
    width: '90%',
    maxWidth: 900,
    margin: 'auto',
    marginBottom: 30,
    [media.lessThan('large')]: {
      fontSize: fonts.size.xs + 4,
    },
    [media.lessThan('medium')]: {
      fontSize: fonts.size.xs,
    },
  },
  button: {
    cursor: 'pointer',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 60,
    marginTop: 70,
    fontSize: fonts.size.xs,
    backgroundColor: colors.orange,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.lightBlue,
      borderColor: 'transparent',
    },
    [media.lessThan('small')]: {
      width: 180,
      height: 50,
      marginTop: 30,
      fontSize: fonts.size.xxs,
    },
  },
  taglineContainer: {
    backgroundColor: colors.lightBlue,
    height: 480,
    padding: '50px 20px',
    display: 'flex',
    [media.lessThan('small')]: {
      height: 380,
    },
  },
  tagline: {
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1.3,
    color: colors.white,
    fontSize: fonts.size.l,
    maxWidth: 815,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xs,
    },
  },
  content: {
    margin: 'auto',
    maxWidth: dimensions.maxWidth,
    [media.lessThan('large')]: {
      padding: '0 20px',
    },
  },
  thesises: {
    display: 'flex',
    margin: '100px auto 65px',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    boxSizing: 'border-box',
    [media.lessThan('small')]: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
      margin: '50px auto 25px',
    },
  },
  title: {
    fontSize: fonts.size.xxl,
    textAlign: 'center',
    paddingTop: 100,
    marginTop: -100,
    [media.lessThan('small')]: {
      textAlign: 'left',
      fontSize: fonts.size.xl + 5,
    },
  },
  subtl: {
    textAlign: 'center',
    fontSize: fonts.size.xs,
    maxWidth: 650,
    lineHeight: 1.3,
    margin: '20px auto 0',
    [media.lessThan('small')]: {
      margin: '20px 0 0',
      textAlign: 'left',
    },
  },
  block: {
    marginTop: 70,
  },
  cardsBlock: {
    marginTop: 35,
    marginBottom: 80,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [media.lessThan('large')]: {
      flexWrap: 'nowrap',
      flexDirection: 'column',
    },
  },
  cardsSubtl: {
    textAlign: 'center',
    fontSize: fonts.size.xs,
    lineHeight: 1.3,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
  placeContent: {
    display: 'flex',
    marginTop: 30,
    [media.lessThan('medium')]: {
      flexDirection: 'column',
    },
  },
  placeLeft: {
    width: '60%',
    [media.lessThan('medium')]: {
      width: '100%',
    },
  },
  placeRight: {
    padding: '30px 50px',
    display: 'flex',
    [media.lessThan('medium')]: {
      padding: '30px 0',
    },
  },
  placeInfo: {
    fontSize: fonts.size.xs,
    lineHeight: 1.3,
    color: colors.orange,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 450,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
  placeInfoIcon: {
    display: 'inline-block',
    marginRight: 20,
    [media.lessThan('small')]: {
      display: 'none',
    },
  },
  mapUnderlay: {
    width: 327,
    margin: 'auto',
    [media.lessThan('medium')]: {
      width: '100%',
    },
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
    margin: '0 auto',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 50,
    maxWidth: 760,
    [media.lessThan('medium')]: {
      justifyContent: 'space-around',
    },
    [media.lessThan('small')]: {
      justifyContent: 'space-between',
      margin: '40px 0 0',
    },
    margin: '0 auto',
  },
  faqBlock: {
    marginTop: 100,
  },
  questions: {
    marginTop: 70,
  },
  qaColumn: {
    width: '49%',
  },
  video: {
    width: '90%',
    maxWidth: 704,
    position: 'absolute !important',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 470,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
    [media.lessThan('medium')]: {
      top: 360,
    },
    [media.lessThan('small')]: {
      top: 420,
    },
    [media.lessThan('xsmall')]: {
      top: 450,
    },
  },
}

class ProductView extends Component {
  render() {
    const { classes, data } = this.props
    const product = data.allProductsYaml.edges[0].node

    return (
      <div className={`${classes.container} fade`}>
        <div className={classes.cover}>
          <div className={classes.overlay}>
            <div className={`${classes.coverContent} fade`}>
              <h1 className={classes.coverTitle}>
                {product.cover.title}
              </h1>
              <p className={classes.coverSubtl}>
                Территория раскрытия возможностей
              </p>
            </div>
          </div>
        </div>
        <Video
          containerClassName={classes.video}
          source={mainVideo}
          cover={videoCover}
          title="Про лагерь ГЕРОИ за 1 минуту"
        />
        <div className={classes.taglineContainer}>
          <div className={classes.tagline}>
            ГЕРОИ — это больше, чем летний детский лагерь. Значительнее, чем активный отдых на природе. Интенсивнее, чем подготовительные курсы. Ярче, чем выездной туризм. Лагерь ГЕРОИ — это среда обитания настоящего победителя.
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.thesises}>
            <Thesis
              image={cupImage}
              hightlight="Призвание нашего лагеря — "
              text="показать каждому участнику, что героем стать возможно. Наша цель — сформировать необходимые качества характера уверенного в себе и успешного человека."
            />
            <Thesis
              image={brilliantImage}
              hightlight="Раскрытие личностного потенциала детей и подростков "
              text="мы реализуем посредством уникальной методики, сочетая в программах элементы физического и психо-эмоционального развития."
            />
            <Thesis
              image={mountainImage}
              hightlight="Результат каждой смены — "
              text="развитие стойкости духа, стратегического мышления, лидерских качеств, умения взаимодействовать в команде, и прежде всего, осознанное отношение к себе и окружающим."
            />
          </div>
          <p
            className={classes.title}
            style={{ marginTop: 0 }}
            id="smena">
              Смены
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '100%',
            alignItems: 'center',
          }}>
            <p className={classes.subtl}>
              В программах сочетаются элементы физического и психо-эмоционального развития — возможность обогатиться бесценным опытом, незабываемыми эмоциями и погрузиться в захватывающие приключения. Вместе с командой дети преодолевают препятствия, формируют доверие к окружающим и уверенность в себе, здоровые привычки и навыки коммуникации.
            </p>
            <img src={rassrochka} style={{ marginTop: 30, maxWidth: '100%' }} />
          </div>
          <div className={classes.cardsBlock}>
            <div className={classes.cards}>
              {
                SMENAS.map(smena => <Card key={smena.title} {...smena} />)
              }
            </div>
            <div className={classes.cardsSubtl}>
              Не знаете, какую смену выбрать? Позвоните <Phone /> — мы проконсультируем.
            </div>
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
                desc="Руководитель развивающих программ"
              />
              <Member
                image={member5}
                name="Евгений Дорошенко"
                desc="Руководитель выездных программ"
              />
              <Member
                image={member6}
                name="Виктор Захаров"
                desc="Руководитель отдела продаж"
              />
            </div>
          </div>
          <div className={classes.block}>
            <p className={classes.title} id="place">
              Место проведения
            </p>
            <div className={classes.placeContent}>
              <div className={classes.placeLeft}>
                <p className={classes.subtl} style={{ textAlign: 'left' }}>
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
            <ImageGallery
              images={[image1, image2, image3, image4].map(src => ({ original: src }))}
            />
          </div>
          <div className={classes.faqBlock}>
            <p className={classes.title} id="faq">Родителям</p>
            <div className={classes.questions}>
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
                question="На какой возраст рассчитаны смены?"
                answer={`
                    Наши смены адаптированы для детей 10-17 лет. Для подробного ознакомления с программами,
                    <a
                      href="#smena"
                      style="color:rgb(100,200,255);text-decoration: underline"
                    >
                      читать здесь.
                    </a>
                    Выбирайте любую и можете быть уверены, что вашему ребенку понравится.
                  `}
              />
              <Question
                question="Что в итоге получат участники?"
                answer="По истечению двух недель приключений, которым позавидуют супергерои, и открытий своих истинных талантов, у юных участников программы вырабатывается новая модель поведения. Участие в летних сменах поможет Героям обрести уверенность в себе и новые навыки, которые лягут в основу становления себя как лидера и ответственного понимания своей роли в обществе. Качества, на формирование которых направлены наши программы: лидерство, уверенность в себе и самостоятельность, отвага, уважение, стратегическое мышление и целеустремлённость, физическая подготовка, навык здорового образа жизни, стрессоустойчивость и выносливость, эмпатическая коммуникация и слушание, экстраверсия, навык принятия решений, ориентирование на местности, инновационные идеи и креативность, забота об окружающей среде и социально-ответственное поведение."
              />
              <Question
                question="Должна ли у моего ребенка быть специальная физическая подготовка?"
                answer="Наши программы не предполагают специальной физической подготовки. Ребенку достаточно не иметь серьезных медицинских противопоказаний, и посещать уроки физкультуры в школе. Конечно, любая программа предполагает спортивную активность и наши опытные инструкторы, которые также обладают навыком первой помощи, помогут на каждом этапе."
              />
              <Question
                question="Что ожидать в спортивной части программы?"
                answer="Спортивная часть программы самая захватывающая, эмоциональная и наполнена яркими впечатлениями для участников! Ребята будут преодолевать горные вершины, добывать воду, учиться разводить костер и готовить пищу, ориентироваться на местности и многое другое. Спортивная часть программы дает возможность в реалистичной форме проработать знания, полученные в  ходе выполнения интелектуальных заданий."
              />
              <Question
                question="Как обеспечивается безопасность лагеря?"
                answer="Безопасность каждого Героя – зона нашей особой ответственности и внимательнейшей проработки. На огороженную, строго охраняемую территорию с видеонаблюдением допускаются только официально зарегистрированные лица. За безопасность ваших детей круглосуточно отвечают инструкторы — ветераны спецназа."
              />
              <Question
                question="Из чего складывается стоимость лагеря?"
                answer="Лагерь ГЕРОИ – это сочетание комфортных условий проживания детей для качественного отдыха; здорового, вкусного, специально продуманного 5-разового питания; высокого уровня квалификации команды и безопасности. Но главное – это уникальная продуманная программа, над которой трудились профессиональные педагоги, психологи и инструкторы-ветераны спецназа. Именно комплексный подход к ее формированию позволяет обеспечить незабываемые впечатления для каждого ребенка, помочь ему обрести опыт и навыки, недоступные в городской среде, а в первую очередь – вернуться домой энергичным, неравнодушным, целеустремленным, самостоятельным, уверенным в себе и жизнерадостным. "
              />
              <Question
                question="Каковы бытовые условия для проживания детей?"
                answer="Мы предлагаем для участников летнего лагеря ГЕРОИ комфортное 3-х местное размещение в комфортабельных номерах базы отдыха «Боровое». В каждом номере свой туалет и душ. Девочки обязательно размещаются отдельно. Организовано 5-ти разовое питание, формируется специальное меню с учетом высокой активности программы и при необходимости - особой диеты участников.   В лагере круглосуточно находится врач-педиатр, а в стоимость смены включено страхование от несчастных случаев."
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
            </div>
            <div
              style={{
                width: '100%',
                height: 200,
                backgroundColor: colors.brown,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: fonts.size.xxs,
                padding: 25,
              }}
            >
              <p>Скачать документы:</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  maxWidth: 400,
                  width: '90%',
                  marginTop: 50,
                  textDecoration: 'underline',
                }}
              >
                <a href="agreement.pdf" download="heroes-agreement.pdf"> &#11015; Договор</a>
                <a href="brochure.pdf" download="heroes-brochure.pdf"> &#11015; Брошюра ГЕРОИ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(ProductView)

export const query = graphql`
  query ProductQuery($title: String) {
  allProductsYaml(
    filter: { title: {eq: $title} }
  ) {
    edges {
      node {
        cover {
          title
        }
      }
    }
  }
}
`
