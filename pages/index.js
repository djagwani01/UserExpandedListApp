import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import styles from '@/styles/Index.module.css';
import { Header } from "@/src/components/Header";
import { User } from '@/src/components/User';
import { getUsers } from '@/src/redux/reducers/userReducer';
import constants from '@/src/utils/constants';
import usersData from '@/json/users.json'

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  console.log('users', users);
  useEffect(() => {
    if(!users.length){
      dispatch(getUsers(usersData));
    }
  }, [users, dispatch])
  return (
    <>
    <div className={styles.main}>
      <Header
        title={constants.USERS}
        iconPath={constants.USERSGROUPICON}
        iconAlt={constants.USERSGROUPALT}
      />
      <div className={styles.usersList}>
        {users?.map((user, key) => {
          return(
            <User key={user.id} user={user} />
          )
        })}
      </div>
    </div>
    </>
  )
};