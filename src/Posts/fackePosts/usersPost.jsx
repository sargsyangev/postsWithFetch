import { useEffect, useState } from "react"
import styles from "./usersPost.module.css"
import { getUsers } from "./api/getUsers"
import UserItem from "./userItem/userItem"

function UsersPosts() {

    const [isLoading, setIsLoadind] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [users, setUsers] = useState([])
    const [value, setValue] = useState("")

    const changeValue = (e) => setValue(e.target.value)

    useEffect(() => {
        setUsers(users.map(user => {
            if (user.profile.name.toLowerCase().includes(value.toLowerCase())) {
                user.isVistable = true
            } else {
                user.isVistable = false
            }
            return user
        }))
    }, [value])

    useEffect(() => {
        getUsers().then(res => {
            if (res.status === "success") {
                let data = res.response.map(user => ({ ...user, isVistable: true }))
                setUsers(data)
                setIsLoadind(false)
                setErrorMessage("")
            }
            if (res.status === "error") {
                setErrorMessage(res.massege)
                setIsLoadind(false)
            }
        })
    }, [])

    return (
        <div className={styles.usersContainer}>
            {isLoading ? <span>Loading...</span>: <></>}
            {errorMessage ? <span>{errorMessage}</span>:<></>}
            {users.length > 0 && <div>
                <input className={styles.searchInput} placeholder="Search item by name" value={value} onChange={changeValue} />
                <div className={styles.userItems}>{users.filter(user => user.isVistable).map(user => <UserItem key={user.id} user={user} />)}</div>
            </div>}
        </div>
    )
}

export default UsersPosts