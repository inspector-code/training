import React, {useEffect, useState} from "react";
import styles from "./Paginator.module.css";
import button from "../../../assets/images/navigate-before.svg"

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    const selectFirstPageOfNextPortion = portionNumber * 10 + 1;
    const selectFirstPageOfPrevPortion = selectFirstPageOfNextPortion - 20;

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / 10));
    }, [currentPage]);


    return (
        <div className={styles.paginator}>
            <div className={styles.prevNextButton}>
                {portionNumber > 1 && <input className={styles.prevButton} type="image" src={button} alt="ОК" onClick={() => {
                    setPortionNumber(portionNumber - 1);
                    onPageChanged(selectFirstPageOfPrevPortion);
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
                    setPortionNumber(portionNumber + 1);
                    onPageChanged(selectFirstPageOfNextPortion);
                }}/>
                }
            </div>
        </div>
    )
};

export default Paginator;