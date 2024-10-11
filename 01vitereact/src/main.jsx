import React from 'react'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx';

function MyApp()
{
    return(
        <div>
            <h1>custom react!</h1>
        </div>
    )
}

// const reactElement = {
//     type:'a',
//     props : {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit  \\\  Google</a>
)

// const anotherElement = (
//     <a href="https://google.com" target="_blank">VisitGoogle</a>
// )

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google$'
)
createRoot(document.getElementById('root')).render( 
    <App/>
)
