import React from 'react'
import SearchBar from '../../components/SearchBar'
import List from '../../components/List'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.homeContainer} flex flex-col items-center`} >
        <SearchBar />
        <List />
    </div>
  )
}
