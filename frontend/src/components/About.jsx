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
        <div className="subtitle">Qui sommes-nous ?</div>
        <h2>Notre histoire</h2>
        <p>
          Formé à l’art classique de la cuisine orientale, le chef Amrane a choisi 
          de partager sa passion à travers un concept unique : le <strong>Mesmen</strong>.
          Cette crêpe feuilletée, véritable spécialité culinaire du Maghreb, se décline
          en de nombreuses variétés selon les régions, de l’Algérie au Maroc en passant par la Tunisie.
        </p>
        <p>
          Mais l’aventure ne s’arrête pas là. Nous proposons également un <strong>couscous maison</strong> 
          préparé de multiples façons, ainsi que des crêpes mille-trous et d’autres délices,
          toujours confectionnés avec passion et savoir-faire.
        </p>
        <p>
          Notre ambition est simple : offrir une expérience culinaire chaleureuse 
          qui vous transporte directement au cœur du Maghreb.
        </p>

        <div className="about-quote">
          <blockquote>“Un voyage authentique au cœur des saveurs du Maghreb.”</blockquote>
        </div>
        
        <a href="#menu" className="about-link">Découvrir notre menu →</a>
      </div>

      <div
        ref={imageRef}
        className={`fade-in-up ${imageVisible ? 'visible' : ''}`}
      >
        <img src="/oriental.jpg" alt="Notre cuisine" className="about-image" />
      </div>
    </section>
  );
}
