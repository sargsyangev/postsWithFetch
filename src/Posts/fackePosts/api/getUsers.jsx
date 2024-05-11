import { users } from "../usersData";

const randomizer = () => Math.round(Math.random())

async function getUsers() {

    if (randomizer()) {
        return {
            response: users,
            status: "success"
        }
    }
    return {
        response: null,
        status: "error",
        massege: "Server is not responding"
    }
}

export { getUsers }