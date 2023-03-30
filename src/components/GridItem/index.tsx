import { LevelsType } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type PropGridItem = {
    item: LevelsType 
}

export const GridItem = ({item}: PropGridItem) => {
    return(
        <div className={styles.main} style={{backgroundColor:item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} width='30' />}
                {item.icon === 'down' && <img src={downImage} width='30' />}
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourImc &&
                <div className={styles.yourImc}>
                    Your BMI is {item.yourImc} kg/m²
                </div>
            }
            <div className={styles.gridInfo}>
                <>
                    BMI is among <strong>{item.imc[0]} e {item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}