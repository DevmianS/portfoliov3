import { useEffect, useRef, useContext, FC, useState } from 'react';
import { skillInterface } from '../../../../Types/types';

import Skill2 from './Skill2';
// import AllSkills from '../../../Utils/AllSkills';
import SelectedContext from '../../../../context/selected-context';
import classes from './Skills.module.scss';
// import axios from 'axios';

interface Props {
  className: string;
  charStateData: {
    leftChar: number;
    frontChar: number;
    rightChar: number;
  };
  allSkillsData: skillInterface[];
}

const SkillsList: FC<Props> = props => {
  const skillsWindowRef = useRef<HTMLDivElement>(null);
  const characerSkills = useRef<HTMLDivElement>(null);
  const skillCharCol0 = useRef<HTMLDivElement>(null);
  const skillCharCol1 = useRef<HTMLDivElement>(null);
  const skillCharCol2 = useRef<HTMLDivElement>(null);
  const [leftCharSkills, setLeftCharSkills] = useState([]);
  // const [allSkillsData, setAllSkillsData] = useState<skillInterface[]>([]);

  const ctx = useContext(SelectedContext);

  const calcLevel = (skill: skillInterface[]) => {
    const charExp = skill.reduce((acc = 0, cur) => {
      // if (
      //   cur.names[0] === 'JavaScript' ||
      //   cur.names[0] === 'React' ||
      //   cur.names[0] === 'Vue' ||
      //   cur.names[0] === 'Angular'
      // ) {
      //   return (acc += 3 * cur.level);
      // }
      return (acc += cur.level);
    }, 0);

    const totalExp = (props.allSkillsData.length - 1) * 10;

    function percentage(partialValue: number, totalValue: number) {
      return (100 * partialValue) / totalValue;
    }

    const result = percentage(charExp, totalExp);
    return Math.ceil(result);
  };
  // useEffect(() => {
  //   const getAllSkillsData = async () => {
  //     const response = await axios.get(
  //       'https://web-dev-skills-api.herokuapp.com/v1/skills'
  //     );
  //     setAllSkillsData(response.data);
  //     return response.data;
  //   };
  //   getAllSkillsData();
  // }, []);

  useEffect(() => {
    if (ctx.isSelected && skillsWindowRef.current) {
      skillsWindowRef.current.classList.add(`${classes['selected--skills']}`);
    } else if (!ctx.isSelected && skillsWindowRef.current) {
      skillsWindowRef.current.classList.remove(
        `${classes['selected--skills']}`
      );
    }
  }, [ctx]);

  useEffect(() => {
    if (window.localStorage.getItem('leftChar'))
      setLeftCharSkills(
        JSON.parse(window.localStorage.getItem('leftChar') || '')
      );
    const onStorage = () => {
      setLeftCharSkills(JSON.parse(localStorage.getItem('leftChar') || ''));
    };
    window.addEventListener('storage', () => onStorage());
    return () => {
      window.removeEventListener('storage', () => {
        onStorage();
      });
    };
  }, []);

  // const frontCharArr = [
  //   [1, 8],
  //   [2, 8],
  //   [3, 7],
  //   [49, 4],
  //   [26, 6],
  //   [13, 7],
  //   [4, 4],
  //   [5, 6],
  //   [8, 5],
  //   [27, 3],
  //   [23, 7],
  //   [10, 5],
  // ];

  const frontCharArr = [
    ['html', 8],
    ['css', 8],
    ['javascript', 7],
    ['typescript', 4],
    ['react', 6],
    ['sass', 7],
    ['git', 4],
    ['github', 6],
    ['npm', 5],
    ['redux', 3],
    ['css-modules', 7],
    ['bem', 5],
  ];

  const rightCharArr = props.allSkillsData.map(skill => {
    return [skill.name, 9];
  });

  const getCharSkills = (charArr: any[]) => {
    const findSkill = (skillName: string, level: number) => {
      // props.allSkillsData.map(skill => {
      //   return skill;
      // });

      const resultSkill = {
        ...props.allSkillsData.find(skill => {
          return skill.name === skillName;
        }),
      };
      const addLevel = { ...resultSkill, level: level };

      return addLevel;
    };
    let resultArr: any[] = [];
    charArr.forEach(item => {
      const findResult = findSkill(item[0], item[1]);
      return resultArr.push(findResult);
    });
    return resultArr;
  };

  const frontChar = getCharSkills(frontCharArr);

  const rightChar = getCharSkills(rightCharArr);

  const skillsByCharacters = [
    [...leftCharSkills],
    [...frontChar],
    [...rightChar],
  ];

  const skillsStruct = (
    id: number,
    pos: number,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    //SCROLLING SKILLS TO THE TOP ON CHARACTER CHANGE
    if (skillCharCol0.current) skillCharCol0.current.scrollTop = 0;
    if (skillCharCol1.current) skillCharCol1.current.scrollTop = 0;
    if (skillCharCol2.current) skillCharCol2.current.scrollTop = 0;

    return (
      <div ref={ref} className={classes['skill-char-col']} data-character={pos}>
        <ul className={classes['skills-list']}>
          {skillsByCharacters[id].map(item => {
            {
              if (item.id === 0) return;
              return <Skill2 key={item.id} skill={item} />;
            }
          })}
        </ul>
      </div>
    );
  };

  const charCreatorText = (pos: number) => {
    return (
      <div className={classes['skill-char-col']} data-character={pos}>
        <div className={`${classes['skills-list--text']}`} data-character={pos}>
          <strong>create</strong>
          <p>your</p>

          <p> frontend</p>
          <strong>character</strong>
        </div>
      </div>
    );
  };

  return (
    <div className={classes['skills-col']}>
      <div
        ref={skillsWindowRef}
        className={`card--glass ${classes['skills-window']} ${
          !ctx.ctaButtonClicked?.clicked ? 'not-started' : ''
        } `}
      >
        <div
          className={`${classes['skills-text']} 
         ${ctx.ctaButtonClicked?.clicked ? classes['abs-up'] : ''}`}
        >
          <p>Choose</p>
          <p>and</p>
          <p>
            <strong>level up</strong>
          </p>
          <p>your</p>
          <p>developer!</p>
        </div>
        <div
          className={`${classes['skills-card']} ${
            !ctx.ctaButtonClicked?.clicked ? classes['abs-down'] : ''
          }`}
        >
          <header className={classes['skills-window__header']}>
            <div className={classes['skills-list-name']}>
              <h2>Unlocked Skills</h2>
            </div>
            <div
              className={`${classes['character-level']}`}
              id='character-level'
            >
              <div className={classes['character-level__level-title']}>
                level
              </div>
              <div className={classes['character-levels']}>
                <div
                  className={classes['character-level__level-number']}
                  data-character={props.charStateData.leftChar}
                >
                  {props.allSkillsData.length ? calcLevel(leftCharSkills) : ''}
                </div>
                <div
                  className={classes['character-level__level-number']}
                  data-character={props.charStateData.frontChar}
                >
                  {props.allSkillsData.length ? calcLevel(frontChar) : ''}
                </div>
                <div
                  className={classes['character-level__level-number']}
                  data-character={props.charStateData.rightChar}
                >
                  {props.allSkillsData.length ? calcLevel(rightChar) : ''}
                </div>
              </div>
            </div>
          </header>
          {props.allSkillsData.length !== 0 ? (
            <div
              ref={characerSkills}
              className={`${classes['character-skills']} `}
            >
              {leftCharSkills.length !== 0
                ? skillsStruct(0, props.charStateData.leftChar, skillCharCol0)
                : charCreatorText(props.charStateData.leftChar)}
              {skillsStruct(1, props.charStateData.frontChar, skillCharCol1)}
              {skillsStruct(2, props.charStateData.rightChar, skillCharCol2)}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
