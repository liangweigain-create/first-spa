import styles from './SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')

    const handleInput = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearch = () => {
        if (searchValue.trim() === '') {
            alert('请输入内容！')
            return;
        }

        setSearchValue('');
    }

    return (
        <div className={`${styles.container} flex`}>
            <input 
                type='text'
                className={`${styles.input}`}
                name='search'
                value={searchValue}
                onChange={handleInput}
            />
            <button onClick={handleSearch} className={`${styles.button}`}>搜索</button>
        </div>
    )
}
