import React, { useState } from 'react';
import { element } from 'prop-types';

import UserContext from './userContext';

function UserProvider({ children }) {
  const [email, setEmail] = useState('Neymar Junior');

  const userContext = {
    email,
    setEmail,
  };

  return (
    <UserContext.Provider value={ { ...userContext } }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: element.isRequired,
};

export default UserProvider;
