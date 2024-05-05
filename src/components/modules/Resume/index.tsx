'use client';

import SectionHeading from '@/components/shared/SectionHeading';
import Title from './Title';
import { ResumeContainer } from './style';

const title = 'Resume';
const subtitle = 'Check out my resume';

const Resume = () => {
  return (
    <div>
      <SectionHeading title={title} subtitle={subtitle} />
      <ResumeContainer>
        <div>
          <h4>Experience</h4>
          <div>
            <h6>Bachelors of Technology</h6>
            <div>2019 - 2023 | 9.41 CGPA</div>
            <p>
              Chameli Devi Group of Institutions, Indore
              <br />
              (Rajiv Gandhi Proudyogiki Vishwavidyalaya)
            </p>
          </div>
          <div>
            <h6>Higher Secondary (12th)</h6>
            <div>2017 - 2018 | 85.20 %</div>
            <p>
              Excellence Govt. Bal Vinay Mandir, Indore
              <br />
              (Madhya Pradesh Board of Secondary Education)
            </p>
          </div>
          <div>
            <h6>Secondary School (10th)</h6>
            <div>2015 - 2016 | 8.60 CGPA</div>
            <p>
              St. Vincent Pallotti School, Indore
              <br />
              (Central Board of Secondary Education)
            </p>
          </div>
        </div>
        <div>
          <h4>Education</h4>
          <div>
            <h6>Bachelors of Technology</h6>
            <div>2019 - 2023 | 9.41 CGPA</div>
            <p>
              Chameli Devi Group of Institutions, Indore
              <br />
              (Rajiv Gandhi Proudyogiki Vishwavidyalaya)
            </p>
          </div>
          <div>
            <h6>Higher Secondary (12th)</h6>
            <div>2017 - 2018 | 85.20 %</div>
            <p>
              Excellence Govt. Bal Vinay Mandir, Indore
              <br />
              (Madhya Pradesh Board of Secondary Education)
            </p>
          </div>
          <div>
            <h6>Secondary School (10th)</h6>
            <div>2015 - 2016 | 8.60 CGPA</div>
            <p>
              St. Vincent Pallotti School, Indore
              <br />
              (Central Board of Secondary Education)
            </p>
          </div>
        </div>
      </ResumeContainer>
      <div>
        <h4>Skills</h4>
      </div>
    </div>
  );
};

export default Resume;
