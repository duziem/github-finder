import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

function Users({users}) {
    return (
        <div className='grid-3'>
            {
                users.map(user => <User key= {user.id} user= {user} />)
            }
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
}

export default Users

