import PropTypes from 'prop-types';
import Image from "next/image";
import styles from '@/styles/Index.module.css';
import constants from "../utils/constants";
import { DropDown } from "./DropDown";
import { useSelector } from "react-redux";
import { getFormattedDateTime, getFullAddress } from "../utils/utils";

export const User = (props) => {
    const { user } = props;
    const { dropDownId, setDropDown } = useSelector(state => state.dropdown);
    return (
        <>
            <div className={styles.userCard}>
                <div className={styles.userGroup}>
                    <Image
                        src={constants.USERICON}
                        alt={constants.USERALT}
                        width={50}
                        height={50}
                        className={
                            user.role === constants.ADMIN && styles.adminColor ||
                            user.role === constants.USER && styles.userColor ||
                            user.role === constants.VIEWER && styles.viewerColor
                        }
                    />
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>{user.firstName} {user.lastName}</div>
                        <div className={styles.userRole}>{user.role}</div>
                        <div className={styles.userEmail}>{user.email}</div>
                        {setDropDown && user.id === dropDownId  && 
                            (<div className={styles.userDetailsCard}>
                                <div>
                                    <div className={styles.detailsHeader}>{constants.ADDRESS}</div>
                                    <div>{getFullAddress(user)}</div>
                                </div>
                                <div>
                                    <div className={styles.detailsHeader}>{constants.PHONE}</div>
                                    <div>{user.phone}</div>
                                </div>
                                <div>
                                    <div className={styles.detailsHeader}>{constants.CREATEDAT}</div>
                                    <div>{getFormattedDateTime(user.createdAt)}</div>
                                </div>
                                <div>
                                    <div className={styles.detailsHeader}>{constants.LASTLOGGEDIN}</div>
                                    <div>{getFormattedDateTime(user.lastLoggedIn)}</div>
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className={styles.dropDownLogo}>
                    <DropDown 
                        id={user.id}
                    />
                </div>
            </div>
        </>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired
}