import { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';

const Characters = props => {
  const [leftChar, setLeftChar] = useState(0);
  const [frontChar, setFrontChar] = useState(1);
  const [rightChar, setRightChar] = useState(2);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const charStateData = {
      leftChar,
      frontChar,
      rightChar,
    };
    props.onCharStateChange(charStateData);
  }, [leftChar, frontChar, rightChar]);

  useEffect(() => {
    if (selected) {
      document
        .querySelector('.skills-window')
        .classList.add('selected--skills');
    } else {
      document
        .querySelector('.skills-window')
        .classList.remove('selected--skills');
    }
  }, [selected]);

  // ********************************************************
  const calcCharWidth = () => {
    let characters = document.querySelector('.characters');
    let characterImgComputedWidth = parseInt(
      window.getComputedStyle(characters).width
    );
    let charactersComputedWith = characterImgComputedWidth * 0.4;

    let root = document.documentElement;
    root.style.setProperty('--characters-width', charactersComputedWith + 'px');
  };

  calcCharWidth();

  window.addEventListener('resize', calcCharWidth);

  // ********************************************************

  const wrapRotate = function (num, direc = -1) {
    if (direc == 1) {
      return (num + 1) % 3;
    }

    if (direc == -1) {
      if (num == 0) {
        return num + 2;
      }
      return (num - 1) % 3;
    }
  };

  // *****************************************************
  const rotateCharactersHandler = e => {
    const setChars = direc => {
      setLeftChar(wrapRotate(leftChar, direc));
      setFrontChar(wrapRotate(frontChar, direc));
      setRightChar(wrapRotate(rightChar, direc));
    };

    let direc = 0;
    let charData = +e.target.dataset.character;

    if (charData === 1) {
      setSelected(true);
    }

    if (charData === 0) {
      direc = 1;
      setChars(direc);
      setSelected(false);
    }
    if (charData === 2) {
      direc = -1;
      setChars(direc);
      setSelected(false);
    }
  };
  // *****************************************************
  //TODO handle swipe gestures
  // let touchstartX = 0;
  // let touchendX = 0;

  // function debounce(func, timeout = 3000) {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, timeout);
  //   };
  // }

  // function checkSwipeDirection() {
  //   if (Math.abs(touchendX - touchstartX) > 50) {
  //     if (touchendX < touchstartX) {
  //       // rotateCharactersHandler();
  //       rotateCharactersHandler(null, 2);
  //       // console.log('rotate right');
  //     }
  //     if (touchendX > touchstartX) {
  //       // rotateLeft();
  //       rotateCharactersHandler(null, 0);
  //       // console.log('rotate left');
  //     }
  //   }
  // }

  // function handleGesture() {
  //   // console.log('handling');
  //   if (touchendX < touchstartX) rotateCharactersHandler(null, 0);
  //   if (touchendX > touchstartX) rotateCharactersHandler(null, 2);
  // }
  //TODO fix swipe endless loop
  // const charactersEl = document.querySelector('.characters');
  // charactersEl.addEventListener('swiped', function (e) {
  //   // console.log(e.target);
  //   rotateCharactersHandler(e);
  // });

  // charactersEl.addEventListener('touchstart', e => {
  //   touchstartX = e.changedTouches[0].screenX;
  // });

  // charactersEl.addEventListener('touchend', e => {
  //   touchendX = e.changedTouches[0].screenX;
  //   handleGesture();
  // });

  // *****************************************************

  const charactersRoot = document.getElementById('characters-root');

  // console.log((frontChar === 1) & selected, 'check');
  let leftIsSelected = (leftChar === 1) & selected;
  let frontIsSelected = (frontChar === 1) & selected;
  let rightIsSelected = (rightChar === 1) & selected;

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Character
          data={leftChar}
          selected={leftIsSelected}
          name='Left'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>,
        charactersRoot
      )}
      {ReactDOM.createPortal(
        <Character
          data={frontChar}
          selected={frontIsSelected}
          name='Front'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>,
        charactersRoot
      )}
      {ReactDOM.createPortal(
        <Character
          selected={rightIsSelected}
          data={rightChar}
          name='Right'
          onRotateCharacters={rotateCharactersHandler}
        ></Character>,
        charactersRoot
      )}
    </Fragment>
  );
};

export default Characters;
