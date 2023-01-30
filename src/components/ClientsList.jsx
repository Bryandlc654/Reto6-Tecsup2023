import React, { useEffect } from 'react'

import { fetchAllClients } from '../store/slices/clients';
import { useDispatch, useSelector } from 'react-redux';

const ClientList = () => {

  const { list: clients } = useSelector(state => state.clients)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllClients());
  }, [dispatch])

  return (
    <div className='constainer mt-4'>
      <div className="row">
        {
          clients.map((client, index) => (
            <div key={index} className='col-md-3 mb-4'>
              <div className="card">
                <img src={client.avatar} alt="avatar" />
                <div className="card-body">
                  <h5>{`${client.first_name} ${client.last_name}`}</h5>
                  <p className='card-text'>{client.email}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClientList;