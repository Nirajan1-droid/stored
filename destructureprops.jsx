const App = props =>{ 
    <div>
        {/* props contains name and title through props parameter 
        ,meaning: the properties of the props is passed after accessing the value of the props

        */}
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
    </div>
}

// seperate props loading

const App = ({name,title})=>{
    <div>
        {/* reference like props is removed , and direct access is featured here! */}
        <h2>{name}</h2>
        <h3>{title}</h3>
    </div>
}
