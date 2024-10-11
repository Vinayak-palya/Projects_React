import React from 'react'

function card(props) {
    console.log("props" , props);
  return (
    <div>
      card helllo {props.username}
    </div>
  )
}

export default card
