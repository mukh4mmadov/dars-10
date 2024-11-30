import React from "react";
import Head from "next/head";
import Indicators from "./components/Indicators"; 
import "./style.css";

function Page() {
  
  const articles = [
    { id: "scroll", number: "01" },
    { id: "article-2", number: "02" },
    { id: "article-3", number: "03" },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="nav-wrapper">
            <div className="logo">MNTN</div>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#!">Equipment</a>
                </li>
                <li>
                  <a href="#!">About us</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
              </ul>
            </nav>
            <div className="log-in">
              <a href="#!">Account</a>
            </div>
            <button className="nav-btn-media">
              <span className="burger"></span>
            </button>
          </div>
          <div className="centering">
            <a href="#scroll" className="home-hover">
              <div className="home">
                <p className="list-paragraph">A Hiking guide</p>
                <h1 className="list-title">
                  Be prepared for the Mountains and beyond!
                </h1>
                <p className="down-navigate">scroll down</p>
              </div>
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <Indicators articles={articles} />

        <section className="section-container">
          <article className="article" id="scroll">
            <div className="article-text" data-number="01">
              <div className="article-subtitle">Get Started</div>
              <h2 className="article-title">What level of hiker are you?</h2>
              <p className="article-description">
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help
                you plan hikes according to different hike ratings set by
                various websites like All Trails and Modern Hiker.
              </p>
              <a className="article-read-more" href="#!">
                read more
              </a>
            </div>
            <div className="article-img">
              <img src="/images/image1.png" alt="" />
            </div>
          </article>
          <article className="article" id="article-2">
            <div className="article-text" data-number="02">
              <div className="article-subtitle">Hiking Essentials</div>
              <h2 className="article-title">Picking the right Hiking Gear!</h2>
              <p className="article-description">
                The nice thing about beginning hiking is&nbsp;that you
                don&rsquo;t really need any special gear, you can probably get
                away with things you already have. Let&rsquo;s start with
                clothing. A&nbsp;typical mistake hiking beginners make
                is&nbsp;wearing jeans and regular clothes, which will get heavy
                and chafe wif they get sweaty or&nbsp;wet.
              </p>
              <a className="article-read-more" href="#!">
                read more
              </a>
            </div>
            <div className="article-img">
              <img src="/images/image2.jpg" alt="" />
            </div>
          </article>
          <article className="article" id="article-3">
            <div className="article-text" data-number="03">
              <div className="article-subtitle">
                where you go&nbsp;is&nbsp;the key
              </div>
              <h2 className="article-title">
                Understand Your Map &amp;&nbsp;Timing
              </h2>
              <p className="article-description">
                To&nbsp;start, print out the hiking guide and map.
                If&nbsp;it&rsquo;s raining, throw them in&nbsp;a&nbsp;Zip-Lock
                bag. Read over the guide, study the map, and have a&nbsp;good
                idea of&nbsp;what to&nbsp;expect. I&nbsp;like to&nbsp;know what
                my&nbsp;next landmark is&nbsp;as&nbsp;I&nbsp;hike. For example,
                I&rsquo;ll read the guide and know that say,
                in&nbsp;a&nbsp;mile, I&nbsp;make a&nbsp;right turn at&nbsp;the
                junction..
              </p>
              <a className="article-read-more" href="#!">
                read more
              </a>
            </div>
            <div className="article-img">
              <img src="/images/image3.png" alt="" />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Page;
