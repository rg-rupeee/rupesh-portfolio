'use client';

import SectionHeading from '@/components/shared/SectionHeading';
import SectionTitle from './Title';
import { ResumeContainer, ResumeSectionContainer } from './style';

const title = 'Resume';
const subtitle = 'Check out my resume';

const Resume = () => {
  return (
    <div>
      {/* <SectionHeading title={title} subtitle={subtitle} /> */}
      <SectionTitle> Experience </SectionTitle>
      <ResumeSectionContainer>
        <div>
          <h4>
            Software Developer @ <span>Bajaj Finserv Health</span>
          </h4>
          <div>
            July 2023 - Present* | <span>Pune</span>
          </div>
          <p>Backend Developement</p>
        </div>
        <div>
          <h4>
            Backend Developer Intern @ <span>Bajaj Finserv Health</span>
          </h4>
          <div>
            July 2022 - June 2023 | <span>Pune</span>
          </div>
          <p>
            Learned to work we monorepo and got to learn application
            architecture, scalling and build tooling to improve CI/CD of micro
            services.
          </p>
        </div>
        <div>
          <h4>
            SDE Intern - Integrations @ <span>Zluri</span>
          </h4>
          <div>
            June 2021 - June 2022 | <span>Remote</span>
          </div>
          <p>Backend Developement</p>
        </div>
      </ResumeSectionContainer>
      <SectionTitle> Education </SectionTitle>
      <ResumeSectionContainer>
        <div>
          <h4>
            Software Developer @ <span>Bajaj Finserv Health</span>
          </h4>
          <div>
            July 2023 - Present* | <span>Pune</span>
          </div>
          <p>Backend Developement</p>
        </div>
        <div>
          <h4>
            Backend Developer Intern @ <span>Bajaj Finserv Health</span>
          </h4>
          <div>
            July 2022 - June 2023 | <span>Pune</span>
          </div>
          <p>
            Learned to work we monorepo and got to learn application
            architecture, scalling and build tooling to improve CI/CD of micro
            services.
          </p>
        </div>
        <div>
          <h4>
            SDE Intern - Integrations @ <span>Zluri</span>
          </h4>
          <div>
            June 2021 - June 2022 | <span>Remote</span>
          </div>
          <p>Backend Developement</p>
        </div>
      </ResumeSectionContainer>
    </div>
  );
};

export default Resume;
