import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './PixelGridTransition.scss';

const getPixelBlocks = () => {
  const { innerWidth, innerHeight } = window;
  const blockSize = innerWidth * 0.05;
  const amountOfBlocks = Math.ceil(innerHeight / blockSize);
  return [...Array(amountOfBlocks)].map((_, i) => {
    return <div className='pixel-grid__block' key={i}></div>;
  });
};

export const PixelGridTransition = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.set('.pixel-grid', { display: 'flex' });
    gsap.to('.pixel-grid__block', {
      opacity: 0,
      duration: 0.001,
      stagger: { amount: 0.5, from: 'random' },
      onComplete: () => {
        gsap.set('.pixel-grid', { display: 'none' });
      },
    });

    // const linkBoxes = document.querySelectorAll('.link-box');
    // const showMoreLinks = document.querySelectorAll('.frame__show-more-label');

    // [...linkBoxes, ...showMoreLinks].forEach((item) => {

    //   item?.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     gsap.set('.pixel-grid', { display: 'flex' });
    //     gsap.fromTo(
    //       '.pixel-grid__block',
    //       {
    //         opacity: 0,
    //       },
    //       {
    //         opacity: 1,
    //         duration: 0.001,
    //         stagger: { amount: 0.5, from: 'random' },
    //         onComplete: () => {
    //           // window.location.href = pageLinkUrl;
    //           gsap.set('.pixel-grid', { display: 'none' });
    //         },
    //       }
    //     );
    //   });
    // });
  }, []);

  return (
    <div className='pixel-grid'>
      {[...Array(20)].map((_, i) => {
        return (
          <div className='pixel-grid__col' key={i}>
            {getPixelBlocks()}
          </div>
        );
      })}
    </div>
  );
};
