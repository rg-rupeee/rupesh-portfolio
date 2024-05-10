import { SectionTitleContainer } from './style';

type SectionTitleProps = {
  children: string;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <SectionTitleContainer>{children}</SectionTitleContainer>;
};

export default SectionTitle;
