import React, {useState} from "react";

export default {
    title: 'HOC demo/React.memo demo',
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Stacy', 'Alex', 'Alice', 'Tanya'])

    const addUser = () => {
        setUsers([...users, 'new user' + new Date().getTime()]);
    }
    //users.push('new user' + new Date().getTime())

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}