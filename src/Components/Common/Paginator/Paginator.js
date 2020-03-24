import React, {useState} from "react";
import styles from "./Paginator.module.css";
import button from "../../../assets/images/navigate-before.svg"

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            <div className={styles.prevNextButton}>
                {portionNumber > 1 && <input className={styles.prevButton} type="image" src={button} alt="ОК" onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}/>}
            </div>
            <div className={styles.numbersBlock}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <div className={(currentPage === p) ? styles.selectedPage : styles.pageNumber}
                                    key={p}
                                    onClick={(e) => {
                                        onPageChanged(p);
                                    }}>{p}</div>
                    })}
            </div>
            <div className={styles.prevNextButton}>
                {portionCount > portionNumber &&
                <input className={styles.nextButton} type="image" src={button} alt="ОК" onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}/>
                }
            </div>
        </div>
    )
};

export default Paginator;