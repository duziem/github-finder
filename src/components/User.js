import React from 'react'

function User ({user: {avatar_url, login, html_url}}){

        return (
            <div className='card text-center'>
            <img src={avatar_url} alt="" className='round-img' style={{width: '60px'}}/> 
            <h3>{login}</h3>
            <div>
                <a href={html_url} className= "btn btn-dark btn-small my-1">
                    more
                </a>
            </div>
         </div>
        )
}

export default User
