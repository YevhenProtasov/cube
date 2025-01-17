import { useLocation } from 'react-router';

type Props = {
  linkTo: string;
  title?: string;
};

export const Header: React.FC<Props> = ({
  linkTo,
  title = 'The Meditation Cube',
}) => {
  const path = useLocation();
  const isAboutUs = path.pathname === '/about-us';

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <a
            href={linkTo}
            className={`link-box ${isAboutUs ? 'link-box--light' : ''}`}
          >
            <span
              className={`link-box__title ${
                isAboutUs ? 'link-box__title--light' : ''
              }`}
            >
              {title}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
