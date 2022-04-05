import { useState } from 'react'

function SearchInput({ onSubmit }) {
  const [keyword, setKeyword] = useState('What is Panda?')

  function handleInputChange(e) {
    setKeyword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (keyword.trim().length) {
      onSubmit(keyword)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search something..."
        value={keyword}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchInput
