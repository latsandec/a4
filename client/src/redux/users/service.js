const addUser = async (user) => {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  
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
  
  export default {
    addUser,
    getUsers
  };