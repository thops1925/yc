'use client'
import React from 'react'
import Link from 'next/link'

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement
    if (form) form.reset()
  }
  return (
    <button onClick={reset}>
      {/* <X className="h-4 w-4" /> */}
      <Link className="search-btn text-white" href="/">
        x
      </Link>
    </button>
  )
}

export default SearchFormReset
