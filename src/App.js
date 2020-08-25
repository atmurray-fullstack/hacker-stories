import React from 'react';
import './App.css';


const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const stories = [
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

  const List = props => {
    return props.list.map(el => (
      <div key={el.objectID}>
        <span>
          <a href={el.url}>{el.title}</a>
        </span>
        <span>{el.authors}</span>
        <span>{el.num_comments}</span>
        <span>{el.points}</span>
      </div>
    ))
  };

  const handleChange = event => {
    setSearchTerm(event.target.value)
  };

  return (
    <div>
      <h1> My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <hr />
      <List list={stories} />
    </div>
  )

}

export default App;
