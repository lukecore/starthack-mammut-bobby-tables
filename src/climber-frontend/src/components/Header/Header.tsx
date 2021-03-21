import React from 'react';
import i18n from '../../i18n';
import styles from './Header.module.scss';

class Header extends React.Component<any, any>  {
  render() {
    return (
      <div className={styles.Header}>
        <h3>{i18n.t("pageTitle")}</h3>
      </div>)
  }
};

export default Header;
