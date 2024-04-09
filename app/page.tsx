"use client"
import React, { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from 'next/image'

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
        <div className="content">
          <h1 className="heading">L’enivrant l’expérience</h1>
          <p>
            Plongez dans une expérience olfactive révolutionnaire lors d'une
            soirée immersive inoubliable ! Avec la technologie EEG
            (électroencéphalogramme), découvrez le nouveau parfum de Lancôme
            d'une manière innovante et sensorielle.
          </p>
        </div>
        <div className="image-column">hello</div>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <div>
          <h1 className="headingbold">Et vous ? </h1> <br />
          <h1 className="heading">Qu’allez-vous ressentir ?</h1>
        </div>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <div>
          <h1 className="heading">
            Comprenez vos images mentales grâce à la technologie EEG
          </h1>
          <Image 
            src="/casque.png"
            alt="Description de l'image" 
            width={500} 
            height={500} 
          />
        </div>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">03</h1>
      </section>
    </main>
  );
}
