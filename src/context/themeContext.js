import React from "react"


const ThemeContext = React.createContext ({
    warning: 'warning', 
    danger: 'danger'
})

export default ThemeContext