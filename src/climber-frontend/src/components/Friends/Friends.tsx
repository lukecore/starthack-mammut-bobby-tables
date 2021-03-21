import React from 'react';
import i18n from '../../i18n';
import styles from './Friends.module.scss';


interface Person{
  surname:string;
  name:string;
  photo:string
}

class Friends extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {friends:[]}
  }

  componentDidMount() {
  }

  friends: Person[]=[{
    surname: "Johnas",
    name:"Merz",
    photo:"/person1.jpg"
  },{
    surname: "Andrea",
    name:"Villiger",
    photo:"/person2.jpg"
  }]

  render() {
    const challenge = i18n.t("challenge")
    const compare = i18n.t("compare")
    return (
      <div className={styles.Friends}>
        <h2>{i18n.t("friendsTitle")}</h2>
        {this.friends.map((user, i) => (<div key={"user" +i} >
          <div className={styles.User}><img src={user.photo} alt="profile" />
          <p>{user.surname} {user.name}</p></div><div><button>{compare}</button> | <a href="#none">{challenge}</a></div>
        </div>))}
      </div>)
  }
};

export default Friends;
