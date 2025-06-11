type LinkBoxType = 'inner' | 'outer' | 'details';

type Props = {
  type: LinkBoxType;
  style?: string;
};

export const LinkBox: React.FC<Props> = ({type, style}) => {
  return (
    <div className={`link-box ${style && 'link-box--light'}`}>
      <span className={`link-box__title ${style && 'link-box__title--light'}`}>
        {type === 'outer' && ('About the Project: The Meditation Cube')}
        {type === 'inner' && ('The Meditation Cube')}
        {type === 'details' && ('The Meditation Cube')}
      </span>
    </div>
  );
}
