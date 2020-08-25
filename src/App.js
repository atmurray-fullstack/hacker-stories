import React from 'react';
import './App.css';


const App = () => {

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

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSeach = event => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(el => {
    return el.title.toLowerCase()
      .includes(searchTerm.toLowerCase())
  })

  const Search = props => {

    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input value={searchTerm} id='search' type='text' onChange={props.onSearch} />
        <p>
          Searching for <strong>{searchTerm}</strong>
        </p>
      </div >
    )
  }

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




  return (
    <div>
      <h1> My Hacker Stories</h1>

      <Search
        search={searchTerm}
        onSearch={handleSeach}
      />

      <hr />
      <List list={searchedStories} />
    </div>
  )

}

export default App;
