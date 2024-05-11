import styles from "./userItem.module.css"

function UserItem({ user }) {
    return (
        <div className={styles.userItem}>
            <span className={styles.itemTitle}>Name::  <span className={styles.itemText}>{user.profile.name}</span> </span>
            <span className={styles.itemTitle}>Username::  <span className={styles.itemText}>{user.username}</span></span>
            <span className={styles.itemTitle}>Dob::  <span className={styles.itemText}>{user.profile.dob}</span></span>
            <span className={styles.itemTitle}>Email::  <span className={styles.itemText}>{user.email}</span></span>
            <span className={styles.itemTitle}>Address::  <span className={styles.itemText}>{user.profile.address}</span></span>
        </div>
    )
}

export default UserItem