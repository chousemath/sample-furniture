import { Link } from "gatsby"
import React from "react"
import styles from '../styles/header.module.scss';
import ReactSearchBox from 'react-search-box'

const searchData = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
];
const Header = () => (
  <header className={styles.mainContainer}>
    <div className={styles.myLogoContainer}>
        <div className={styles.myLogoInner}>
            <img src='/images/logo.png' className={styles.myLogoImage} />
        </div>
    </div>
    <div className={styles.searchContainer}>
        <ReactSearchBox
            placeholder="Search here!"
            value=""
            data={searchData}
            callback={record => console.log(record)}
          />
        </div>
    <div className={styles.saleContainer}>Room Ideas</div>
    <div className={styles.saleContainer}>
        <span className={styles.saleText}>
            Sale
        </span>
    </div>
    <div className={styles.accountContainer}>
        <div className={styles.logoContainer}>
            <div className={styles.smallIconContainer}>
                <img src='/images/user.png' className={styles.smallIcon} />
            </div>
        </div>
        <div className={styles.text}>Account</div>
    </div>
    <div className={styles.listsContainer}>
        <div className={styles.logoContainer}>
            <div className={styles.smallIconContainer}>
                <img src='/images/list.png' className={styles.smallIcon} />
            </div>
        </div>
        <div className={styles.text}>Lists</div>
    </div>
    <div className={styles.cartContainer}>
        <div className={styles.logoContainer}>
            <div className={styles.smallIconContainer}>
                <img src='/images/cart.png' className={styles.smallIcon} />
            </div>
        </div>
        <div className={styles.text}>Cart</div>
    </div>
  </header>
)

export default Header
