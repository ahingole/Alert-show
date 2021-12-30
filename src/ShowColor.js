import React from 'react'

export const ShowColor = ({type,msg}) => {
    return (
        <div>
      <p className={`alert alert-${type}`} > {msg} </p>

        </div>
    )
}
