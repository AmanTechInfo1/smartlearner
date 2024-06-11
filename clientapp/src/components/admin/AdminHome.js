import React, { useEffect } from 'react';
import styles from '../../assets/css/admin.module.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { MdQuiz } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getMyDashboard } from '../../redux/features/dashboardSlice';

export default function AdminHome() {

  const dispatch = useDispatch()

  let dataIcon={
    "Product":<BsFillArchiveFill className={styles.cardIcon}/>,
    "Category":<BsFillGrid3X3GapFill className={styles.cardIcon}/>,
    "Users":<BsPeopleFill className={styles.cardIcon}/>,
    "Quiz Question":<MdQuiz className={styles.cardIcon}/>
  }


  const { cards } = useSelector((state) => state.dashboard);


  console.log(cards, "cardscardscardscards")

  let a = ""
  useEffect(() => {
    dispatch(getMyDashboard());
  }, [a]);

  return (
    <>
      <div className={styles.mainTitle}>
        <h3>DASHBOARD</h3>
      </div>


      <div className={styles.mainCards}>
        {
          cards.map((itm) => {
            return <div className={styles.card} style={{backgroundImage:itm.bgColor}}>
              <div className={styles.cardInner}>
                <h3>{itm.label}</h3>
                {dataIcon[itm.label]}
              </div>
              <h1>{itm.value}</h1>
            </div>
          })
        }
{/*         
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className={styles.cardIcon} />
          </div>
          <h1>300</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className={styles.cardIcon} />
          </div>
          <h1>12</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className={styles.cardIcon} />
          </div>
          <h1>33</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h3>ALERTS</h3>
            <BsFillBellFill className={styles.cardIcon} />
          </div>
          <h1>42</h1>
        </div> */}
      </div>


    </>
  );
}