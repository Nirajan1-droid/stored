const App = items =>{
    <ul>
        {//if the id and age are the object then this better 
            items.map(items=>{
                <li key={items.id}>
                    {items.age}
                </li>
            })
        }
    </ul>
}

// for destructuring the arrays

const App = items =>{
    <ul>
        {//if the id and age are the array like structure then it is better to use.
            items.map((id,age)=>{
                <li key={id}>
                    {age}
                </li>
            })
        }
    </ul>
}