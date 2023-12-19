import React from 'react'
import Image from './Image'
import Prix from './Prix'
import Titre from './Titre'
import './livre.css'

const Livre = ({ url, titre, prix }) => {
  return (
    <div className="livre">
      <Image url={url} titre={titre} />
      <Titre titre={titre} />
      <Prix prix={prix} />
    </div>
  )
}

export default Livre
