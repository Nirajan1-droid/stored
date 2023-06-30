const App = (props )=>{
    <div {...props}>
        {props.name}
    </div>
}

// effectively passing all props

const App = ({name,...rest})=>{
    <div {...rest}>
        {name}
    </div>
}