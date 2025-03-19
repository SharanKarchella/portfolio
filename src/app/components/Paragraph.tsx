import React from 'react'

function Paragraph({className, children}:any) {
  return (
    <p className={className}>{children}</p>
  )
}

export default Paragraph