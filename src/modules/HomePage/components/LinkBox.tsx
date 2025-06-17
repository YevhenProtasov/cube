type LinkBoxType = 'inner' | 'outer' | 'details';

type Props = {
  type: LinkBoxType;
  style?: string;
  onOpen: () => void;
};

export const LinkBox: React.FC<Props> = ({type, style, onOpen}) => {
  return (
    <div
      className={`link-box ${style && 'link-box--light'}`}
      onClick={onOpen}
    >
      <span className={`link-box__title ${style && 'link-box__title--light'}`}>
        {type === 'outer' && ('About the Project: The Meditation Cube')}
        {type === 'inner' && ('The Meditation Cube')}
        {type === 'details' && ('The Meditation Cube')}
      </span>
    </div>
  );
}
