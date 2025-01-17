import { Header } from '../../shared/components/Header';
import './AboutUsPage.scss';

export const AboutUsPage = () => {
  return (
    <>
      <Header linkTo='/' />

      <main className='main'>
        <section className='about-us'>
          <div className='container'>
            <div className='about-us__wrapper'>
              <div className='about-us__graphic'>
                <div className='temp_shadow'></div>
                {/* <div className='about-us__line'></div> */}
              </div>
              <ul className='about-us__links'>
                <li>
                  <a href='#' className='about-us__link' target='_blank'>
                    <span className='icon icon--instagram'></span>
                  </a>
                </li>
                <li>
                  <a href='#' className='about-us__link' target='_blank'>
                    <span className='icon icon--facebook'></span>
                  </a>
                </li>
                <li>
                  <a href='#' className='about-us__link' target='_blank'>
                    <span className='icon icon--youtube'></span>
                  </a>
                </li>
                <li>
                  <a href='#' className='about-us__link' target='_blank'>
                    <span className='icon icon--linkedin'></span>
                  </a>
                </li>
                <li>
                  <a href='#' className='about-us__link' target='_blank'>
                    <span className='icon icon--telegram'></span>
                  </a>
                </li>
                <li>
                  <a href='#' className='about-us__link' target='_blank'>
                    <span className='icon icon--pinterest'></span>
                  </a>
                </li>
              </ul>
              <div className='about-us__typography'>
                <h1 className='about-us__title'>
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
                </p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h2 className='about-us__title'>
                  The Birth <br />
                  of the Cube
                </h2>
                <p className='about-us__text'>
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
                </p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h2 className='about-us__title'>
                  The Purpose <br /> of the Meditation Cube
                </h2>
                <p className='about-us__text'>
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
                </p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h2 className='about-us__title'>
                  A Vision <br />
                  for the Future
                </h2>
                <p className='about-us__text'>
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
                </p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className='video'>
          <div className='container'>
            <div className='video__wrapper'>
              <div className='play'>
                <span className='icon icon--youtube'></span>
                <p>coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
