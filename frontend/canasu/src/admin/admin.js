import React from 'react'
import NavComp from '../components/NavComp'
import CSVUploader from '../components/CSVUploader'
import InfoTables from '../components/InfoTables'


export default function Admin() {
  return (
    <div >
      <NavComp/>
      <CSVUploader/>
      
      <InfoTables/>
      
      
    </div>
  )
}
