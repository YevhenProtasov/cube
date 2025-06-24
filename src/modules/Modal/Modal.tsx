import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import { LinkBox } from "../HomePage/components/LinkBox";
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
}

export const Modal:React.FC<Props> = ({ isOpen, onClose }) => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // if (window.innerWidth < 1280 || !isOpen) {
    if (!isOpen) {
      return;
    }

    // const aboutUsWrapper = document.querySelector('.about-us__wrapper');
    // const graphic = aboutUsWrapper?.querySelector('.temp_shadow');
    // const socials = aboutUsWrapper?.querySelector('.about-us__links');
    // const graphicHeight = graphic?.clientHeight;
    // const socialsHeight = socials?.clientHeight;

    // const content = aboutUsWrapper?.querySelector('.about-us__typography');
    // const contentHeight = content?.clientHeight;

    // const startValue = 80;
    // const endValue = 50;
    // const graphicOffset = window.innerWidth < 1920 ? 24 : 32;

    // if (graphicHeight && contentHeight && socialsHeight) {
    //   // console.log('fires', {graphicHeight, contentHeight, socialsHeight});
    //   console.log('fires', {aboutUsWrapper});
      
    //   gsap.to(graphic, {
    //     scrollTrigger: {
    //       trigger: aboutUsWrapper,
    //       start: `top +=${startValue}px`,
    //       end: `+=${contentHeight - graphicHeight - endValue}`,
    //       scrub: true,
    //       pin: graphic,
    //       pinSpacing: false,
    //       markers: true,
    //     },
    //   });

    //   gsap.to(socials, {
    //     scrollTrigger: {
    //       trigger: aboutUsWrapper,
    //       start: `top +=${startValue}px`,
    //       end: `+=${contentHeight - socialsHeight - endValue - graphicOffset}`,
    //       scrub: true,
    //       pin: socials,
    //       pinSpacing: false,
    //       markers: false,
    //     },
    //   });
    // }


    // Reveal text on scroll
    const textToReveal = document.querySelectorAll('.about-us__text');
    const aboutUs = document.querySelector('#about-project');

    textToReveal.forEach((word, index) => {
      // const activeColor = '#ffffff';
      // const bgColor = '#353535';
      const text = new SplitType(word as HTMLElement, { types: 'words' });

      gsap.from(text.words, {
        opacity: 0.2,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          scroller: aboutUs,
          trigger: word,
          start: `${!index ? 'top 80%' : 'top 75%'}`,
          end: `${!index ? 'top 50%' : 'top 30%'}`,
          scrub: true,
          markers: false,
          toggleActions: 'play play reverse reverse',
        },
      });
    });
  }, [isOpen]);

  return (
    <div id='about-project' className={`modal modal--about ${isOpen ? 'active' : ''}`}>
      <LinkBox type='inner' style="light" onOpen={onClose} />

      <section className='about-us'>
        <div className='container'>
          <div className='about-us__wrapper'>
            <div className='about-us__graphic'>
              <div className='temp_shadow'></div>
              {/* <div className='about-us__line'></div> */}
            </div>
            <ul className='about-us__links'>
              <li>
                <a href='https://www.instagram.com/torisstudio' className='about-us__link' target='_blank'>
                  <span className='icon icon--instagram'></span>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/people/Meditation-Cube/61577078050799/?mibextid=wwXIfr' className='about-us__link' target='_blank'>
                  <span className='icon icon--facebook'></span>
                </a>
              </li>
              <li>
                <a href='https://youtu.be/_Vp4-CmUYrE' className='about-us__link' target='_blank'>
                  <span className='icon icon--youtube'></span>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/oleksandra-tsymbaliuk-a970ba49/' className='about-us__link' target='_blank'>
                  <span className='icon icon--linkedin'></span>
                </a>
              </li>
              <li>
                <a href='https://www.behance.net/torisstudio#' className='about-us__link' target='_blank'>
                  <span className='icon icon--behance'></span>
                </a>
              </li>
              <li>
                <a href='https://ru.pinterest.com/torisstudio0078/' className='about-us__link' target='_blank'>
                  <span className='icon icon--pinterest'></span>
                </a>
              </li>
            </ul>

            <div className='about-us__typography'>
              {/* <h1 className='about-us__title'>
                A Journey of Creativity <br /> and Mindfulness
              </h1>
              <p className='about-us__text'>
                The Meditation Cube is more than just an object—it’s a
                culmination of my personal and artistic journey. Born in
                Ukraine, I’ve always been drawn to exploring the intersection
                of art, technology, and human emotion. My studies at the
                Kharkiv State Academy of Design and Arts laid the foundation
                for my passion for visual storytelling, while my work as a
                graphic designer refined my skills in crafting.
                <br />
                When the war forced me to leave in Kharkiv and start anew in
                Warsaw, I sought a way to channel my emotions and find balance
                in the chaos. During this time, I began to practice
                meditation, discovering its power to ground and calm the mind.
                Combining my artistic background with my newfound love for
                mindfulness, the idea for the Meditation Cube was born.
              </p> */}
              <h1 className='about-us__title'>
                Podróż przez <br /> kreatywność i uważność
              </h1>
              <p className='about-us__text'>
                Integralną częścią instalacji jest zaawansowany system oświetlenia, oparty na cyfrowej taśmie LED WS2812B, składającej się z 1240 indywidualnie adresowanych diod RGB. Sterowany za pomocą mikrokontrolera ESP32, system ten umożliwia dynamiczne animacje świetlne, które reagują na obecność użytkownika dzięki czujnikowi ruchu RCWL-0516. Wykorzystanie konwertera poziomów logicznych (układ 74AHCT125) gwarantuje stabilną transmisję sygnału.
                <br />
                <br />
                Dzięki temu, gdy ruch użytkownika zostaje wykryty, instalacja generuje losowe, zmienne efekty świetlne - jako wizualną manifestację wzmożonej energii i dynamiki interakcji. Natomiast w momencie braku aktywności oświetlenie stopniowo wygasa, przechodząc do stanu czuwania, co podkreśla subtelny kontrast między ruchem a ciszą, między zgiełkiem a medytacyjnym wyciszeniem.
              </p>

              {/* <p className='about-us__text'>
                <span className='about-us__title'>
                  The Birth <br />
                  of the Cube
                </span>
                The Meditation Cube emerged as a physical and conceptual space
                for introspection and peace. Its minimalist design reflects
                the simplicity of mindfulness, while its structure symbolizes
                balance and stability. I wanted to create something tangible
                that could guide people through the practice of meditation,
                offering them a serene refuge in their busy lives.
                <br />
                To bring this vision to life, I drew upon my skills in
                animation, design, and fiber-optic installations. The Cube is
                not only visually captivating but also interactive —it
                combines light, texture, and motion to create an immersive
                experience. Using Arduino and other digital tools, I
                programmed the Cube to react to breathing patterns, guiding
                users to focus on breath and align with the present moment.
              </p> */}
              <p className='about-us__text'>
                <span className='about-us__title'>
                  Narodziny <br /> Kostki
                </span>
                Kostka Medytacyjna powstała jako fizyczna i konceptualna przestrzeń do introspekcji i spokoju. Jej minimalistyczny design odzwierciedla prostotę uważności, a struktura symbolizuje równowagę i stabilność. Chciałam stworzyć coś namacalnego, co mogłoby prowadzić ludzi przez praktykę medytacji, oferując im spokojną przystań w zabieganym życiu.
                <br />
                <br />
                Aby urzeczywistnić tę wizję, wykorzystałam swoje umiejętności z zakresu animacji, designu i instalacji światłowodowych. Kostka nie tylko przyciąga wzrok, ale jest także interaktywna — łączy światło, fakturę i ruch, tworząc wciągające doświadczenie. Używając Arduino i innych narzędzi cyfrowych, zaprogramowałam Kostkę tak, by reagowała na rytm oddechu użytkownika, pomagając skupić się na oddechu i zanurzyć się w chwili obecnej.
              </p>

              {/* <p className='about-us__text'>
                <span className='about-us__title'>
                  The Purpose <br /> of the Meditation Cube
                </span>
                At its core, the Meditation Cube is a tool for mindfulness.
                It’s designed to help anyone, regardless of their experience
                with meditation, connect with their inner calm. Each side of
                the Cube represents a key aspect of meditation—position,
                breath, focus, and time. By engaging with the Cube, users are
                guided through a step-by-step journey to stillness.
                <br />
                Beyond its practical purpose, the Cube is a work of art. It’s
                an expression of resilience, creativity, and the universal
                need for peace. Whether displayed in a gallery or used in a
                quiet corner of someone’s home, the Meditation Cube invites
                reflection and offers a moment of pause in our hectic modern
                lives.
              </p> */}
              <p className='about-us__text'>
                <span className='about-us__title'>
                  Cel Kostki Medytacyjnej
                </span>
                W swojej istocie Kostka Medytacyjna to narzędzie uważności. Została zaprojektowana tak, aby pomagać każdemu — niezależnie od doświadczenia z medytacją — w nawiązywaniu kontaktu z wewnętrznym spokojem. Każda ściana Kostki reprezentuje kluczowy aspekt medytacji: pozycję, oddech, skupienie i czas. Poprzez interakcję z Kostką użytkownicy przechodzą krok po kroku w stronę wyciszenia.
                <br />
                <br />
                Poza praktycznym zastosowaniem, Kostka jest również dziełem sztuki. To wyraz odporności, kreatywności i uniwersalnej potrzeby pokoju. Niezależnie od tego, czy znajduje się w galerii, czy w zacisznym kącie czyjegoś domu — Kostka Medytacyjna zaprasza do refleksji i oferuje chwilę wytchnienia w naszym zabieganym, nowoczesnym świecie.
              </p>

              {/* <p className='about-us__text'>
                <span className='about-us__title'>
                  A Vision <br />
                  for the Future
                </span>
                The Meditation Cube is just the beginning of my exploration of
                interactive art and mindfulness. I see it as part of a larger
                vision to create spaces—both physical and virtual—that inspire
                self-discovery and well-being. As I continue to develop this
                project, I hope to bring it to more people, integrating
                technology, design, and meditation in new and innovative ways.
                <br />
                This project is not just about me; it’s about you and your
                journey. I invite you to experience the Cube, let it guide
                you, and discover the calm within. Together, we can create
                moments of peace in a world that often feels overwhelming.
              </p> */}
              <p className='about-us__text'>
                <span className='about-us__title'>
                  Wizja na przyszłość
                </span>
                Kostka Medytacyjna to dopiero początek mojej podróży w świecie interaktywnej sztuki i uważności. Traktuję ją jako część większej wizji tworzenia przestrzeni — zarówno fizycznych, jak i wirtualnych — które inspirują do samopoznania i dobrostanu. Kontynuując rozwój tego projektu, mam nadzieję dotrzeć do jeszcze większej liczby osób, łącząc technologię, design i medytację w nowatorski sposób.
                <br />
                <br />
                Ten projekt nie dotyczy tylko mnie — dotyczy także ciebie i twojej drogi. Zapraszam cię do doświadczenia Kostki, pozwól jej poprowadzić się i odkryć spokój, który jest w tobie. Razem możemy tworzyć chwile pokoju w świecie, który często przytłacza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='video'>
        {/* <div className='container'> */}
          <div className='video__wrapper'>
              <ReactPlayer
                url='https://youtu.be/_Vp4-CmUYrE'
                controls
                width='100%'
                height='100%'
              />
          </div>
        {/* </div> */}
      </section>

      <section className='about-us-description'>
        <div className='container'>
          <div className='about-us__wrapper'>
            <div className='about-us__graphic'>
              <div className='temp_shadow'></div>
              {/* <div className='about-us__line'></div> */}
            </div>
            <ul className='about-us__links'>
              <li>
                <a href='https://www.instagram.com/torisstudio' className='about-us__link' target='_blank'>
                  <span className='icon icon--instagram'></span>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/people/Meditation-Cube/61577078050799/?mibextid=wwXIfr' className='about-us__link' target='_blank'>
                  <span className='icon icon--facebook'></span>
                </a>
              </li>
              <li>
                <a href='https://youtu.be/_Vp4-CmUYrE' className='about-us__link' target='_blank'>
                  <span className='icon icon--youtube'></span>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/oleksandra-tsymbaliuk-a970ba49/' className='about-us__link' target='_blank'>
                  <span className='icon icon--linkedin'></span>
                </a>
              </li>
              <li>
                <a href='https://www.behance.net/torisstudio#' className='about-us__link' target='_blank'>
                  <span className='icon icon--behance'></span>
                </a>
              </li>
              <li>
                <a href='https://ru.pinterest.com/torisstudio0078/' className='about-us__link' target='_blank'>
                  <span className='icon icon--pinterest'></span>
                </a>
              </li>
            </ul>

            <div className='about-us__typography'>
              <h4 className='footer-description__title'>Praca dyplomowa</h4>
              <p><b>Projekt "Kostka medytacyjna"</b> powstał na potrzeby obrony magisterskiej pracy dyplomowej na Wydziale Sztuki Nowych Mediów Polsko-Japońskiej Akademii Technik Komputerowych w Warszawie.</p>
              <ul className='footer-description__list'>
                <li className='footer-description-item'>
                  Autor pracy - <b>Oleksandra Tsymbaliuk</b>
                  </li>
                <li className='footer-description-item'>
                  Promotor główny - <b>dr Anna Barilik</b>
                  </li>
                <li className='footer-description-item'>
                  Promotor techniczny - <b>mgr inż. Marcin Wichrowski</b>
                </li>
                <li className='footer-description-item'>
                  Promotor pracy teoretycznej - <b>mgr Agata Myjak</b>
                </li>
              </ul>
              <h4 className='footer-description__title'>PJATK 2025</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
