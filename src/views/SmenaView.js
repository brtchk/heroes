import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'

import createMarkup from '../helpers/createMarkup'

import Point from '../components/Point'
import Map from '../components/Map'
import ImageGallery from '../components/ImageGallery'

import AgeIcon from '../components/Icons/Age'
import CalendarIcon from '../components/Icons/Calendar'
import TimeIcon from '../components/Icons/Time'
import Team from '../components/Team'
import TimeTable from '../components/TimeTable/TimeTable'
import SmenaInfo from '../components/SmenaInfo'
import Video from '../components/Video'

import mainImage from '../static/smena-1-inside.jpg'
import image1 from '../static/smena-1-1.jpg'
import image2 from '../static/smena-1-2.jpg'
import image3 from '../static/smena-1-3.jpg'

import { colors, fonts, dimensions, media } from '../theme'

const styles = {
  container: {
    paddingTop: 70,
    paddingBottom: 150,
    color: colors.brown,
    lineHeight: 1.3,
    [media.lessThan('medium')]: {
      paddingBottom: 120,
    },
    [media.lessThan('small')]: {
      paddingBottom: 80,
    },
  },
  content: {
    maxWidth: dimensions.maxWidth,
    fontSize: fonts.size.m,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    [media.lessThan('large')]: {
      maxWidth: '100%',
    },
  },
  leftCol: {
    maxWidth: 740,
    [media.lessThan('large')]: {
      maxWidth: '100%',
    },
  },
  rightCol: {
    position: 'relative',
    width: 250,
    [media.lessThan('large')]: {
      display: 'none',
    },
  },
  textBlock: {
    margin: '30px 0',
  },
  text: {
    fontSize: fonts.size.m,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
    [media.lessThan('medium')]: {
      fontSize: fonts.size.xs,
    },
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
  },
  smallText: {
    fontSize: fonts.size.xs,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxxs,
    },
    [media.lessThan('medium')]: {
      fontSize: fonts.size.xxs,
    },
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
  },
  title: {
    fontSize: fonts.size.xxl - 7,
    color: colors.orange,
    marginBottom: 50,
    marginTop: 40,
    lineHeight: 1,
    [media.lessThan('small')]: {
      fontSize: fonts.size.m,
    },
    [media.lessThan('medium')]: {
      fontSize: fonts.size.l,
    },
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
  },
  smenaInfo: {
    fontSize: fonts.size.s,
    padding: `0 ${dimensions.padding.horizontal}px`,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
    [media.lessThan('medium')]: {
      fontSize: fonts.size.xs,
    },
    [media.greaterThan('large')]: {
      display: 'none',
    },
  },
  highlight: {
    color: colors.orange,
  },
  highlightBlock: {
    backgroundColor: colors.lightBlue,
    padding: '60px 30px',
    margin: '50px 0',
    textAlign: 'center',
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
    [media.lessThan('medium')]: {
      fontSize: fonts.size.xs,
    },
    [media.lessThan('large')]: {
      width: '100%',
    },
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
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
  tableLeft: {
    marginRight: 90,
  },
  teamContainer: {
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
  },
  placeInfo: {
    display: 'flex',
    fontSize: fonts.size.xxs,
    marginBottom: 50,
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
    [media.lessThan('small')]: {
      flexDirection: 'column',
    },
  },
  placeInfoItem: {
    maxWidth: 285,
    width: '100%',
    [media.lessThan('small')]: {
      marginBottom: 30,
    },
  } ,
  oraganisationConatiner: {
    [media.lessThan('large')]: {
      padding: `0 ${dimensions.padding.horizontal}px`,
    },
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
  mobileApply: {
    color: colors.white,
    backgroundColor: colors.orange,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 99,
    width: '100%',
    height: 100,
    left: 0,
    bottom: 0,
    padding: `10px ${dimensions.padding.horizontal}px`,
    [media.greaterThan('large')]: {
      display: 'none',
    },
  },
  mobileApplyLeft: {
    width: '50%',
  },
  mobileApplyRight: {
    width: '50%',
    maxWidth: 200,
    fontSize: `${fonts.size.xxs}px !important`,
    textAlign: 'right',
  },
  mobileApplyTitle: {
    fontSize: fonts.size.xs,
    [media.lessThan('small')]: {
      fontSize: fonts.size.xxs,
    },
  },
  mobileApplySmallText: {
    fontSize: fonts.size.xxxs,
    marginBottom: 10,
  },
}

const SmenaView = ({
  classes,
  smena,
}) => (
  <div className={`${classes.container} fade`}>
    <div className={classes.content}>
      <div className={classes.leftCol}>
        <p className={classes.text}>{smena.for}</p>
        <p className={classes.title} style={{ marginTop: 0 }}>
          {smena.title}
        </p>
        <SmenaInfo
          smena={{
            age: smena.age,
            date: smena.date,
            time: smena.time,
          }}
          className={classes.smenaInfo}
        />
        <p
          className={`${classes.text} ${classes.textBlock}`}
          dangerouslySetInnerHTML={createMarkup(smena.intro.text1)}
        />
        <div className={classes.highlightBlock}>
          {smena.intro.highlight}
        </div>
        <Video
          source={smena.video}
          textStyle={{ top: '70%', width: '100%' }}
          title="Смотреть рассказ  про смену"
        />
        <p className={`${classes.text} ${classes.textBlock}`}>
          {smena.intro.text2}
        </p>
        <img src={smena.image} className={classes.image} />
        <p className={classes.title}>{smena.program.title}</p>
        <ul className={`${classes.list} ${classes.text} ${classes.textBlock}`}>
          {smena.program.list.map(item => <li key={item}>{item}</li>)}
        </ul>
        <div className={classes.highlightBlock}>
          {smena.program.highlight}
        </div>
        <p className={classes.title}>{smena.programDesc.title}</p>
        <ul className={`${classes.list} ${classes.text} ${classes.textBlock}`}>
          {smena.programDesc.list.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className={classes.title}>{smena.base.title}</p>
        <p className={`${classes.text} ${classes.textBlock}`}>
          {smena.base.text}
        </p>
        <ul className={`${classes.list} ${classes.text} ${classes.textBlock}`}>
          {smena.base.list.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p className={classes.smallText}>
          {smena.base.note}
        </p>
        <div className={classes.highlightBlock}>
          {smena.base.highlight}
        </div>
        <p className={classes.title}>{smena.timeTable.title}</p>
        <TimeTable timeTable={smena.timeTable} />
        <p className={classes.title}>{smena.team.title}</p>
        <div className={classes.teamContainer}>
          <Team members={smena.team.members} />
        </div>
        <p className={classes.title}>{smena.place.title}</p>
        <p className={`${classes.text} ${classes.textBlock}`}>
          {smena.place.text}
        </p>
        <div className={classes.placeInfo}>
          <div
            className={classes.placeInfoItem}
            style={{ marginRight: 50 }}
          >
            <p className={classes.highlight}>Адрес</p>
            <p>{smena.place.address}</p>
          </div>
          <div
            className={classes.placeInfoItem}
          >
            <p className={classes.highlight}>Безопасность</p>
            <p>{smena.place.safety}</p>
          </div>
        </div>
        <div style={{ margin: '45px 0' }}>
          <Map />
        </div>
        <ImageGallery
          images={smena.place.images.map(src => ({ original: src }))}
        />
        <p className={classes.title}>{smena.organization.title}</p>
        <div className={classes.oraganisationConatiner}>
          {smena.organization.list.map(item => (
            <Point
              key={item.title}
              question={item.title}
              answer={item.text}
            />
          ))}
        </div>
      </div>
      <div className={classes.rightCol}>
        <div className={classes.apply}>
          <p className={classes.applySubtl}>{smena.for}</p>
          <p className={classes.applyTitle}>{smena.title}</p>
          <div style={{ margin: '40px 0' }}>
            <p className={classes.applyInfoChild}>
              <AgeIcon
                color={colors.black}
                width={22}
                className={classes.icon}
              />
              <span className={classes.applyInfoText}>{smena.age}</span>
            </p>
            <p className={classes.applyInfoChild}>
              <CalendarIcon
                color={colors.black}
                width={22}
                className={classes.icon}
              />
              <span className={classes.applyInfoText}>{smena.date}</span>
            </p>
            <p className={classes.applyInfoChild}>
              <TimeIcon
                color={colors.black}
                width={22}
                className={classes.icon}
              />
              <span className={classes.applyInfoText}>{smena.time}</span>
            </p>
          </div>
          <p className={classes.applySubtl}>Стоимость</p>
          <p className={classes.applyTitle}>{`${smena.price} рублей`}</p>
          {/* <Link
            to={smena.applyRoute}
            className={classes.button}
          >
            Отправить заявку
          </Link> */}
          <a
            href={smena.amoForm}
            className={classes.button}
          >
            Отправить заявку
          </a>
        </div>
      </div>

      <div className={classes.mobileApply}>
        <div className={classes.mobileApplyLeft}>
          <p className={classes.mobileApplyTitle}>{smena.title}</p>
        </div>
        <div className={classes.mobileApplyRight}>
          <p className={classes.mobileApplySmallText}>
            {`${smena.price} рублей`}
          </p>
          {/* <Link
            to={smena.applyRoute}
            className={classes.button}
            style={{
              fontSize: fonts.size.xxs,
              marginTop: 0,
            }}
          >
            Отправить заявку
          </Link> */}
          <a
            href={smena.amoForm}
            className={classes.button}
            style={{
              fontSize: fonts.size.xxs,
              marginTop: 0,
            }}
          >
            Отправить заявку
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(SmenaView)
