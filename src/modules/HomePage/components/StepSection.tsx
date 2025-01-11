type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
};

export const StepSection: React.FC<Props> = ({
  imgUrl,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className='step'>
      <div className='container'>
        <div className='step__wrapper'>
          <picture className='step__image'>
            <img src={imgUrl} />
          </picture>
          <div className='step__typography'>
            <div>
              <h2 className='step__title'>{title}</h2>
              <span className='step__subtitle'>{subtitle}</span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
