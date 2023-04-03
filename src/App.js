import React from 'react'
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


const App = () => {
  return (
    <>
    <AddUser/>
    <UserList users={[]}/>
    </>
  )
}

export default App;
