import React from 'react';
import Users from './Users';
import Search from './Search';



function Home({ setAlert }){

    return (
      <div>
          <Search setAlert= {setAlert} />
          <Users/>
      </div>
  )
}

export default Home;
