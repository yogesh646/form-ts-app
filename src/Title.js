import React from 'react'

const Title = () => {
    console.log('rendering title');
  return (
    <div>Use Callback</div>
  )
}

export default React.memo(Title)