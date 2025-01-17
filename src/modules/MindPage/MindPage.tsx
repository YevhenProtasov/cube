import { Header } from '../../shared/components/Header';

export const MindPage = () => {
  return (
    <>
      <Header linkTo='/' />
      <section className='details'>
        <div className='container'>
          <div className='details__wrapper'>
            <div className='details__content'>
              <h1 className='details__title'>Mind</h1>
              <div className='details__info'>
                <h2>
                  Observe Your Thoughts <br /> Without Judgment
                </h2>
                <p>
                  Your mind will wander—it’s part of being human. Thoughts,
                  memories, and emotions may arise during meditation, and the
                  goal is not to fight them but to observe them with curiosity
                  and without judgment.
                  <br />
                  <br />
                  When a thought arises, imagine it as a cloud passing through
                  the sky of your mind. Acknowledge its presence without
                  attaching to it or letting it carry you away. Then gently
                  bring your focus back to your breath, like returning to a home
                  base.
                  <br />
                  <br />
                  This practice helps you build awareness of your mental habits
                  and creates a space between you and your thoughts. Over time,
                  you’ll find it easier to remain calm and centered, even in the
                  midst of distractions or challenges
                </p>
                <div className='details__line details__line--mind'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
