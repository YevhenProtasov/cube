// import reactLogo from '../../assets/react.svg';
// import viteLogo from '/vite.svg';
import heroLogo from '../../assets/image/logo_mirror--large.png';
import line from '../../assets/image/line.png';
import square from '../../assets/image/square.png';
import shadow from '../../assets/image/shadow.png';
import './HomePage.css';
import { StepSection } from './components/StepSection';

export const HomePage = () => {
  return (
    <>
      <main className='main'>
        <section className='hero'>
          <div className='container'>
            <div className='hero__wrapper'>
              <picture className='hero__image'>
                <img src={heroLogo} />
              </picture>
              <div className='hero__typography'>
                <h1 className='hero__title'>The Cube</h1>
                <p className='hero__subtitle'>Discover</p>
              </div>
            </div>
          </div>
        </section>

        <section className='about'>
          <div className='container'>
            <div className='about__wrapper'>
              <div className='about__line'>
                <img src={line} />
              </div>
              <div className='about__typography'>
                <p>
                  Interact with the Cube to explore the foundations of
                  meditation. Each face of the Cube represents a different
                  aspect of the practice
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='steps'>
          <StepSection
            imgUrl={square}
            title='Position'
            subtitle='Face 1'
            description='Sit up straight, feel the stability'
          />

          <StepSection
            imgUrl={square}
            title='Eyes'
            subtitle='Face 2'
            description='Keep your eyes open, gaze downward'
          />

          <StepSection
            imgUrl={square}
            title='Breathing'
            subtitle='Face 3'
            description='Follow your breath, stay in the present'
          />

          <StepSection
            imgUrl={square}
            title='Mind'
            subtitle='Face 4'
            description='Observe your thoughts, return to the breath'
          />

          <StepSection
            imgUrl={square}
            title='Time'
            subtitle='Face 5'
            description='Start with 5 minutes, focus on the moment'
          />

          <StepSection
            imgUrl={square}
            title='End'
            subtitle='Face 6'
            description='Slowly return to your daily life'
          />
        </section>

        <footer className='footer'>
          <div className='container'>
            <div className='footer__wrapper'>
              <div className='footer__image'>
                <img src={shadow} />
              </div>
            </div>
          </div>
        </footer>
        {/* <div>
          <a href='https://vite.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div> */}
      </main>
    </>
  );
};
