import React from 'react'
import { SearchForm } from '../components/SearchForm'

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">PITCH YOUR STARTUP CONNECT WITH PEOPLE</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
        </p>
        <SearchForm />
      </section>
    </>
  )
}
