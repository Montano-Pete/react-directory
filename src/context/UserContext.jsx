import { createContext, useState } from 'react';
import { getProfile } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getProfile();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
