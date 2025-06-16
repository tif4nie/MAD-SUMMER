import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Users from './components/Users';

const RestApi = () => {
  const [users, setUsers] = useState<
    {name: string; email: string; phone: string}[]
  >([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {users.map(item => (
        <Users name={item.name} email={item.email} phone={item.phone} />
      ))}
    </ScrollView>
  );
};

export default RestApi;
