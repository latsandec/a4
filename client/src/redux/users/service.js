const addUser = async (user) => {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    response.json().then({
      
    })
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
    return await getUsers();
  };
  
  const getUsers = async () => {
    const response = await fetch('http://localhost:3001/users', {
      method: 'GET'
    });
    return response.json();
  };

  const getUser = async (userId) => {
    const response = await fetch('http://localhost:3001/users/' + userId, {
      method: 'GET'
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
    
    return data;
  };

  const deleteUser = async (userId) => {
    const response = await fetch('http://localhost:3001/users/' + userId, {
      method: 'DELETE'
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg);
    }
    
    return await getUsers();
  };
  
  export default {
    addUser,
    getUsers,
    getUser,
    deleteUser
  };