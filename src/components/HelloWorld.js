import React, { useContext } from "react"
import Context from '../Context'

const HelloWorld = props => {
    const context = useContext(Context)
    return <div>
        {context.state.message}
    </div>
}

export default HelloWorld