import {Box, Text} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    const setUserInfo = async () => {
        const userInfo = await axios.get(`http://localhost:3001/api/auth/users?token=${localStorage.getItem('token')}`)

        setUsers([...userInfo.data]);
    }

    setUserInfo()
});

  return (
    <Box >
        {users.map((user)=> (
            <Box key={user._id} mb="4" p={5} borderRadius={'lg'} backgroundColor={"whitesmoke"}>
                <Text fontWeight={'bold'}>{user.username}</Text>
                <Text>{user.email}</Text>
                <Text textColor={'gray'} textAlign={'right'}> {user.password}</Text>
            </Box>
        ))}
    </Box>
  );
}

export default Homepage;