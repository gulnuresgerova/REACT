import React from 'react'
import Table from '../../companent/table'
import "./index.css"
const Home = ({users}) => {
  return (

<div className="container">
<div className="home">
<Table users={users} />
</div>
</div>
  )
}

export default Home