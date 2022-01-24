import React from 'react'
import PropTypes from 'prop-types'
import User from './User'
import Spinner from './Spinner';

function Users({users, loading}) {
    return (
        <div className='grid-3'>
            {
                loading ?
                <Spinner/> :
                users.map(user => <User key= {user.id} user= {user} />)
            }
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
}

export default Users