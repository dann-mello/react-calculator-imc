import React, { ChangeEvent, useState } from "react";
import styled from "./App.module.css";
import poweredimage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { levels, calculateImc, LevelsType } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<LevelsType | null>(null);

  function handleClickHeightField(e:ChangeEvent<HTMLInputElement>){
    setHeightField(parseFloat( e.target.value ))
  }

  function handleClickWeightField(e:ChangeEvent<HTMLInputElement>){
    setWeightField(parseFloat( e.target.value ))
  }

  function handleCalculateButton(){
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert('Fill in all fields');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styled.main}>
      <header>
        <div className={styled.headerContainer}>
          <img src={poweredimage} width={150} />
        </div>
      </header>
      <div className={styled.container}>
        <div className={styled.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>
            BMI is the acronym for Body Mass Index, a parameter adopted by the
            world health organization to calculate the ideal weight of each
            person.
          </p>

          <input 
            type="number"
            placeholder="Enter your height Ex: 1.5"
            value={heightField > 0 ? heightField : ''}
            onChange={handleClickHeightField}
            disabled={toShow ? true : false}
          />
          <input 
            type="number"
            placeholder="Enter your weight Ex: 75.3"
            value={weightField > 0 ? weightField : ''}
            onChange={handleClickWeightField}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calculate</button>
        </div>
        <div className={styled.rightSide}>
          {!toShow && 
            <div className={styled.grid}>
              {levels.map((item, key) => (
                <GridItem key={key}  item={item}/>
              ))}
            </div>
          }
          {toShow && 
            <div className={styled.rightBig}>
              <div className={styled.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
