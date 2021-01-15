import React, {useState, useEffect} from 'react';



const UseThisExample = () => {

    const [size, setSize] = useState(window.innerWidth)

    const ChangeWidthState = () => {
        setSize(window.innerWidth)

    }

    useEffect(() => {
        window.addEventListener('resize', ChangeWidthState)
        
    }, [])


    return(
        <React.Fragment>
            <div>
                <h1>
                    Window Size
                </h1>

                <span>{size}</span>
            </div>
        </React.Fragment>
    )

}


export default UseThisExample;
