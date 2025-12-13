import './index.css'
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
        <div className='search-container'>
            <input 
                type='text'
                className='search-bar'
                name='search'
                value={searchValue}
                onChange={handleInput}
            />
            <button onClick={handleSearch}>点我触发搜索</button>
        </div>
    )
}
