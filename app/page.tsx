"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => {
            const container = document.querySelector("#container");
            if (container) {
              return "+=" + container.getBoundingClientRect().width;
            } else {
              return 0;
            }
          },
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main id="container">
      {/* ---------- section 01 ---------- */}
      <section className="horizontal-section">
        <div className="header">
          <img src="/Lancôme.svg" alt="SVG1" />
          <p className="headerX">X</p>
          <img src="/sparkevents.svg" alt="SVG2" />
        </div>
        <div className="content">
          <h1 className="headinglight">L’enivrant,</h1>
          <h1 className="heading">l’expérience</h1>
          <p style={{ maxWidth: '600px' }}>
            Plongez dans une expérience olfactive révolutionnaire lors d'une
            soirée immersive inoubliable ! Avec la technologie EEG
            (électroencéphalogramme), découvrez le nouveau parfum de Lancôme
            d'une manière innovante et sensorielle.
          </p>
        </div>
        <div className="image-column">
          <Image
            src="/img/Cloche.png"
            alt="cloche.png"
            width={500}
            height={450}
          />
        </div>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <div>
          <h1 className="headingbold">Et vous ? </h1>
          <h1 className="heading">Qu’allez-vous ressentir ?</h1>
        </div>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizontal-section">
        <div className="centered-content">
          <h3 className="headingh3">
            Comprenez vos images mentales grâce à la technologie EEG
          </h3>
          <div className="image-container">
            <Image
              src="/img/casque.png"
              alt="Description de l'image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* ---------- section 04 ---------- */}
      <section className="horizontal-section">
        <div className="image-column2">
          <Image
            src="/img/masque_olfactif_proto_1-removebg-preview.png"
            alt="masque_olfactif_proto_1-removebg-preview.png"
            width={380}
            height={420}
          />
        </div>
        <div className="content">
          <h1 className="heading">Le masque olfactif</h1>
          <p>
            Cette technologie chinoise permet de diffuser des parfums à travers
            un masque souple et ergonomique. Cela permet ainsi de diffuser via
            une cartouche de 9 générateurs d’odeurs. L’odeur est produite par le
            chauffage d’une cire qui renferme le parfum.
          </p>
        </div>
      </section>

      {/* ---------- section 05 ---------- */}
      <section className="horizontal-section">
        <div className="bottom-image-container">
          <Image
            src="/img/woman-c.png"
            alt="woman-c.png"
            width={1200}
            height={1100}
            objectFit="cover"
          />
        </div>
      </section>

      {/* ---------- section 06 ---------- */}
      <section className="horizontal-section">
        <div className="content-wrapper">
          <div className="column">
            <div className="text-content">
              <h4 className="heading">Le box immersif</h4>
              <p>
                Découvrez l’interprétation en temps réel de vos images mentales
                sur des écrans géants à 360° ! Un moment de partage et de
                découverte de soi.
              </p>
            </div>
            <p>
              Une nouvelle façon de découvrir le nouveau parfum de Lancôme,
              l’enivrant. Votre image mentale imprimée, saisissez l’occasion de
              partager votre imagination et vision à votre entourage !
            </p>
          </div>
        </div>
        <div className="column">
          <div className="image-content">
            <Image
              src="/img/pictures.png"
              alt="pictures.png"
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* ---------- section 07 ---------- */}
      <section className="horizontal-section">
        <div className="video-container">
          <div className="overlay-image">
            <Image
              src="/img/flacon_sans_fond_2.png"
              alt="woman-c.png"
              width={1100}
              height={1500}
            />
          </div>
          <video controls autoPlay muted>
            <source src="/video/events.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
          </video>
        </div>
      </section>
    </main>
  );
}
