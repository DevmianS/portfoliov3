import { FC } from 'react';
import { skillInterface } from '../../Types/types';
import classes from './SkillInfo.module.scss';

interface Props {
  skill: skillInterface | undefined;
  data: { showInfo: boolean };
}

const SkillInfo: FC<Props> = ({ data, skill }) => {
  const shortenDesc = (text: string | undefined) => {
    if (!text) return;
    if (text.length > 190) {
      const shortText = text.slice(0, 190);
      return `${shortText}...`;
    } else return text;
  };
  return (
    <div
      className={`${classes.info} ${
        data.showInfo ? classes['tooltip-open'] : ''
      }`}
    >
      <div className={classes['icon-title']}>
        <h3 className={classes.title}>{skill?.names[0]}</h3>
        <img src={skill?.icon} alt='' />
      </div>
      <span className={classes.description}>
        {shortenDesc(skill?.description)}
      </span>
    </div>
  );
};

export default SkillInfo;
