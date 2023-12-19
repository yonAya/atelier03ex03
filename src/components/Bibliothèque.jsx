import React from 'react'
import Livre from './Livre'

const Bibliothèque = ({ tableau }) => {
  return (
    <div className="biblio">
      {tableau.map((l) => (
        <Livre key={l.id} url={l.url} titre={l.titre} prix={l.prix} />
      ))}
    </div>
  )
}

export default Bibliothèque
