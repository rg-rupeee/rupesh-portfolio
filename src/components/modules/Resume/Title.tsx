import { TitleContainer } from './style';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <TitleContainer>{title}</TitleContainer>;
};
export default Title;
