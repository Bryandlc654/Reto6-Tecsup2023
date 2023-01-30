import React, { useEffect } from 'react'

import { fetchAllUsers } from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {

  const { list: users } = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])

  return (
    <div className='constainer mt-4'>
      <div className="row">
        {
          users.map((user, index) => (
            <div key={index} className='col-md-3 mb-4'>
              <div className="card">
                <img src={user.attributes.url_image} alt="avatar" />
                <div className="card-body">
                  <h5>{`${user.id} ${user.attributes.name}`}</h5>
                  <p className='card-text'>{user.attributes.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList;