const divTag = document.getElementById("divTag");

function Render({ data, classN, handleClick }) {
    return (
        <div>
            <h1>List Member Of {classN} Class</h1>
            <p >
                {data.length > 0 && data.map((user, index) => {
                    return (
                        <div>
                            <span > name: {user.name}, age: {user.Age}</span>
                            <button onClick={() => handleClick(index)}>Transfer</button>
                        </div>
                    )
                }
                ) || <p>Emty Class</p>}
            </p>
        </div>
    )
}

function Component(props) {
    const [users, setUser] = React.useState([
        { name: "Nguyễn Văn A", Age: 19 },
        { name: "Nguyễn Văn B", Age: 20 },
        { name: "Nguyễn Văn C", Age: 21 }
    ])

    const [user2, setUser2] = React.useState([
        { name: "Nguyễn Văn D", Age: 22 },
        { name: "Nguyễn Văn E", Age: 23 },
        { name: "Nguyễn Văn F", Age: 24 }
    ])
    const transReact = (index) => {
        const tt = user2.splice(index, 1)
        setUser([
            ...users,
            ...tt
        ])
    }

    const transJava = (index) => {
        const tt = users.splice(index, 1)
        setUser2([
            ...user2,
            ...tt
        ])
    }
    return (
        <div>
            <Render data={users} classN="React" handleClick={transJava} />
            <Render data={user2} classN="Java" handleClick={transReact} />
        </div>

    )
}

ReactDOM.render(
    <Component />, divTag);
