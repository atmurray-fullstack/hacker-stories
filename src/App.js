import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const list = [
    {
      title: 'React',
      url: 'https:..reactjs.org./',
      authors: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      authors: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]

  const List = () => {
    list.map(el => (
      <div key={el.objectID}>
        <span>
          <a href={el.url}>{el.title}</a>
        </span>
      </div>
    ))
  }

  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h1> My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <hr />

    </div>
  )

}

export default App;
