import React from 'react'

const Button = ({handleclick,children}) => {
    console.log('rendering button');
  return (
    <div>
        <button onClick={handleclick}>
{children}
</button>
    </div>
  )
}

export default React.memo(Button)