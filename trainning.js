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
        { name: "Nguyễn Văn A", Age: 20 },
        { name: "Nguyễn Văn B", Age: 21 },
        { name: "Nguyễn Văn C", Age: 20 }
    ])

    const [user2, setUser2] = React.useState([
        { name: "Trần Văn A", Age: 26 },
        { name: "Trần Văn B", Age: 27 },
        { name: "Trần Văn C", Age: 28 }
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
