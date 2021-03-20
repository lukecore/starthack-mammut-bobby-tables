import React from 'react';
import i18n from '../../i18n';
import styles from './Friends.module.scss';

class Friends extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {friends:[]}
  }

  componentDidMount() {
  }


  render() {

    return (
      <div className={styles.Friends}>
        <h2>{i18n.t("friendsTitle")}</h2>
      </div>)
  }
};

export default Friends;
