import { useEffect, useRef, useState } from 'react';
import '../styles/about.css';

export default function About() {
  const textRef = useRef();
  const imageRef = useRef();
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.2 };

    const textObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTextVisible(true);
        textObserver.disconnect();
      }
    }, options);

    const imageObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setImageVisible(true);
        imageObserver.disconnect();
      }
    }, options);

    if (textRef.current) textObserver.observe(textRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      textObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div
        ref={textRef}
        className={`about-text fade-in-up ${textVisible ? 'visible' : ''}`}
      >
        <div className="subtitle">Notre histoire</div>
        <h2>À propos</h2>
        <p>
          L'atelier de msemen94 est né d’une passion pour la cuisine authentique, généreuse et pleine de cœur.
          Chaque plat est cuisiné maison à partir de produits frais, locaux et de saison.
        </p>
        <p>
          Nous croyons en une restauration simple, humaine et chaleureuse, qui met en avant le goût,
          la qualité et le partage. Bienvenue chez L'atelier de msemen94, votre nouveau rendez-vous gourmand.
        </p>

        <div className="about-quote">
          <blockquote>“Chez L'atelier de msemen94, on cuisine comme à la maison… mais en mieux.”</blockquote>
        </div>
        
        <a href="#menu" className="about-link">Découvrir notre menu →</a>
      </div>

      <div
        ref={imageRef}
        className={`fade-in-up ${imageVisible ? 'visible' : ''}`}
      >
        <img src="/public/cuisine.jpg" alt="À propos" className="about-image" />
      </div>
    </section>
  );
}
