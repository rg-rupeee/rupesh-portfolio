'use client';

import { HeadingContainer } from './style';

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <HeadingContainer>
      <span>{subtitle}</span>
      <h3>{title}</h3>
      <div />
    </HeadingContainer>
  );
};

export default SectionHeading;
