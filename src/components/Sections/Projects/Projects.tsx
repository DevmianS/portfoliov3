import { FC, Fragment } from 'react';
import { useSpring } from 'react-spring';
import { useScroll } from '@use-gesture/react';
import classes from './Projects.module.scss';
import ProjectsList from './ProjectsList';
import project1 from '../../../resources/img/projects/project1.webp';
import project2 from '../../../resources/img/projects/project2.webp';
import { skillInterface } from '../../../Types/types';

interface Props {
  allSkillsData: skillInterface[];
  isLoading: boolean;
}
const Projects: FC<Props> = props => {
  const projectsArr = [
    {
      id: 0,
      image: project1,
      title: 'Portfolio',
      overview: (
        <Fragment>
          Frontend game-like character <strong>selector</strong> and{' '}
          <strong>creator</strong> , create your own character or contact me and{' '}
          <strong>LEVEL ME UP!</strong>
        </Fragment>
      ),
      skills: [
        'html',
        'css',
        'javascript',
        'react',
        'typescript',
        'sass',
        'git',
        'github',
        'firebase',
        'vite',
      ],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/DevmianS/portfoliov3',
    },
    {
      id: 1,
      image: project2,
      title: 'Splitter',
      overview: (
        <Fragment>
          <strong>FrontendMentor.io</strong> challenge{' '}
          <strong>Tip Calculator</strong>, done in <strong>overkill</strong>{' '}
          stack.
        </Fragment>
      ),
      skills: [
        'html',
        'css',
        'javascript',
        'react',
        'typescript',
        'sass',
        'css-modules',
        'git',
        'github',
        'vite',
      ],
      link: 'https://devmian-tip-calculator.web.app/',
      repo: 'https://github.com/DevmianS/tip-calculator-react',
    },
    {
      id: 2,
      image: project1,
      title: 'Web-dev-API',
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ['javascript', 'expressjs', 'git', 'github'],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 3,
      image: project1,
      title: 'Web-dev-API',
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ['javascript', 'expressjs', 'git', 'github'],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
    {
      id: 4,
      image: project1,
      title: 'Web-dev-API',
      overview: (
        <Fragment>
          Simple <strong>API</strong> database that gives you access to the list
          of <strong>Web development technologies</strong> and skills.
        </Fragment>
      ),
      skills: ['javascript', 'expressjs', 'git', 'github'],
      link: 'https://portfolio-27cdd.web.app/',
      repo: 'https://github.com/Dant3s15/portfoliov3',
    },
  ];

  return (
    <section id='my-projects' className={classes.projects}>
      <p className={classes.title}>My Projects</p>
      <div className={classes['my-projects']}>
        <ProjectsList
          allSkillsData={props.allSkillsData}
          isLoading={props.isLoading}
          data={{
            array: projectsArr,
          }}
        ></ProjectsList>
      </div>
    </section>
  );
};

export default Projects;
