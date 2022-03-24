import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Dropdown, Layout, PlanCard, Ratings, ReviewCard } from '../components'
import style from "../styles/LandingPage.module.css";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Imposery</title>
        <meta name="description" content="Inposery Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <header className={style.header}>
          <div className="container flex-row-center">
            <div className={style.headerText}>
              <h1 className={style.title}>Manage Your <span className="text-blue-primer">Store Sales</span> and <span className="text-blue-primer">Revenue</span> Easily</h1>
              <p className={style.subtitle}>We offer the convenience of your POS System. with various mainstay features such as calculating daily sales, setting roles, inventory management, daily, monthly, weekly transactions in your store.</p>
              <button className="btn-big btn-link mx-auto">GET STARTED</button>
              <Link href=""><a>Subscribe from IDR 80k/month</a></Link>
            </div>
            <div className={style.headerArt}>
              <Image src="/images/ilustration.svg" layout='fill' />
            </div>
          </div>
        </header>
        <section className={`${style.feature} relative`}>
          <img src="/images/Eclipse.svg" alt="Eclipse" className={`${style.eclipse} ${style.eclipse1}`} />
          <img src="/images/Eclipse.svg" alt="Eclipse" className={`${style.eclipse} ${style.eclipse2}`} />
          <div className="container">
            <h1 className={style.featureTitle}>WE PROVIDE YOU<span className={`${style.longbox} mx-auto`}></span></h1>
            <p className={style.featureSubtitle}>Some of the features that we provide to your store, to support ease of transactions and calculation of your sales</p>
            <div className={style.featureGrid}>
              <Card icon="/icons/facebook.svg" title="Daily Transaction" subtitle="View daily transaction information." />
              <Card icon="/icons/facebook.svg" title="Daily Transaction" subtitle="View daily transaction information." />
              <Card icon="/icons/facebook.svg" title="Daily Transaction" subtitle="View daily transaction information." />
              <Card icon="/icons/facebook.svg" title="Daily Transaction" subtitle="View daily transaction information." />
              <Card icon="/icons/facebook.svg" title="Daily Transaction" subtitle="View daily transaction information." />
              <Card icon="/icons/facebook.svg" title="Daily Transaction" subtitle="View daily transaction information." />
            </div>
          </div>
        </section>
        <section className={style.benefits}>
          <div className="container flex-row-center justify-strecth">
            <img src="/images/ilustration2.svg" alt="Ilustration 2" className={style.ilustration2} />
            <div className={style.benefitsCard}>
              <h1>Busines Advantage Using</h1>
              <h1 className='text-blue-primer'>POS System</h1>
              <ul>
                <li>Regular business finance management.</li>
                <li>Information about sales/profit is more systematic.</li>
                <li>Organized business financial management</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={style.faq}>
          <div className="container flex-row-center justify-between">
            <div className={style.faqWrapper}>
              <h1 className={style.faqTitle}>Frequently Ask Question (F.A.Q)</h1>
              <ul className={style.faqUl}>
                <Dropdown question='How long can I use the free trial available?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem eos, quaerat ut dignissimos ipsa commodi doloribus excepturi vero quam reiciendis, saepe id nobis natus dolore fugit ducimus debitis architecto!' />
                <Dropdown question='Can I upload anything I want on there?' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem eos, quaerat ut dignissimos ipsa commodi doloribus excepturi vero quam reiciendis, saepe id nobis natus dolore fugit ducimus debitis architecto! ' />
                <Dropdown question='How many shops can I create in once' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem eos, quaerat ut dignissimos ipsa commodi doloribus excepturi vero quam reiciendis, saepe id nobis natus dolore fugit ducimus debitis architecto!' />
                <Dropdown question='How many shops can I create in once' answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem eos, quaerat ut dignissimos ipsa commodi doloribus excepturi vero quam reiciendis, saepe id nobis natus dolore fugit ducimus debitis architecto!' />
              </ul>
            </div>
            <div className={style.ilustration3}>
              <Image src="/images/ilustration3.svg" alt="Ilustration 3" layout='fill' />
            </div>
          </div>
        </section>
        <section className={style.plans}>
          <div className="container">
            <h1 className={style.plansTitle}>15 - days free trial.</h1>
            <p className={style.plansSubtitle}>Try Our POS System for free</p>
            <div className={style.plansWraper}>
              <PlanCard />
              <PlanCard recomend={true} />
              <PlanCard />
            </div>
          </div>
        </section>
        <section className={style.review}>
          <img src="/images/Eclipse.svg" alt="Eclipse" className={`${style.eclipse} ${style.eclipse1}`} />
          <img src="/images/Eclipse.svg" alt="Eclipse" className={`${style.eclipse} ${style.eclipse2}`} />
          <div className={style.reviewText}>
            <h1 className={style.reviewTitle}>What Our <span>Customer Are Saying</span></h1>
            <p className={style.reviewSubtitle}>Our customer love it about POS system to engage their bussiness
              and help them to get efficiency when calculate their revenue</p>
          </div>
          <div className={style.reviewWraper}>
            <ReviewCard img='/images/avatar.png' reviewer='Jhony Deep' job='Cofee shop owner' rating={5} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione molestiae a, animi obcaecati aliquid iure nisi velit recusandae sed corrupti. Dolor quia laborum explicabo incidunt assumenda soluta dignissimos deleniti?" />
            <ReviewCard img='/images/avatar.png' reviewer='Jhony Deep' job='Cofee shop owner' rating={5} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione molestiae a, animi obcaecati aliquid iure nisi velit recusandae sed corrupti. Dolor quia laborum explicabo incidunt assumenda soluta dignissimos deleniti?" />
            <ReviewCard img='/images/avatar.png' reviewer='Jhony Deep' job='Cofee shop owner' rating={5} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione molestiae a, animi obcaecati aliquid iure nisi velit recusandae sed corrupti. Dolor quia laborum explicabo incidunt assumenda soluta dignissimos deleniti?" />
            <ReviewCard img='/images/avatar.png' reviewer='Jhony Deep' job='Cofee shop owner' rating={5} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione molestiae a, animi obcaecati aliquid iure nisi velit recusandae sed corrupti. Dolor quia laborum explicabo incidunt assumenda soluta dignissimos deleniti?" />
            <ReviewCard img='/images/avatar.png' reviewer='Jhony Deep' job='Cofee shop owner' rating={5} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione molestiae a, animi obcaecati aliquid iure nisi velit recusandae sed corrupti. Dolor quia laborum explicabo incidunt assumenda soluta dignissimos deleniti?" />
          </div>
          {/* <div className="review-control">
          <img src="/icons/BigRightArrowDead.svg" alt="Left Arrow" className='prev'/>
          <img src="/icons/BigRightArrow.svg" alt="Right Arrow" className='next'/>
        </div> */}
        </section>
        <section className={style.mobile}>
          <div className="container">
            <div className={style.mobileWraper}>
              <h1 className={style.mobileTitle}>Manage your Transactions through the <span>Mobile application </span>and view the Dashboard through the <span>Website</span></h1>
              <p className={style.mobileSubtitle}>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
            </div>
          </div>
          <img src="/images/PhoneMockup.png" alt="Mobile" className={style.mobileImg1} />
          <img src="/images/PhoneMockup.png" alt="Mobile" className={style.mobileImg2} />
        </section>
        <section className={style.prefooter}>
          <div className="container">
            <img src="/icons/InPOSery.svg" alt="Logo" />
            <div className={style.prefooterText}>
              <p>Download Now</p>
              <p>License</p>
            </div>
            <div className={style.prefooterNav}>
              <Link href="/"><a className={style.preefooterNavItem}>Home</a></Link>
              <Link href=""><a className={style.preefooterNavItem}>Feature</a></Link>
              <Link href=""><a className={style.preefooterNavItem}>Review</a></Link>
              <Link href=""><a className={style.preefooterNavItem}>Pricing</a></Link>
            </div>
          </div>
        </section>
      </Layout>
    </>


  )
}

export default Home
