import React from 'react';
import i18n from '../../i18n';
import styles from './Header.module.scss';

class Header extends React.Component<any, any>  {
  render() {
    return (
      <div className={styles.Header}>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L1.6261 6.82172C1.27251 7.20478 1.27251 7.79522 1.6261 8.17828L7 14" stroke="black" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 7.5H15" stroke="black" strokeLinejoin="round" strokeLinecap="round" />
        </svg>

        <h2>{i18n.t("pageTitle")}</h2>
      </div>)
  }
};

export default Header;
