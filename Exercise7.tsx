import React, {useEffect, useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import Card from './components/UserCard';

const RestApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get('https://reqres.in/api/users?page=1'),
          axios.get('https://reqres.in/api/users?page=2'),
        ]);
        setUsers([...res1.data.data, ...res2.data.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>User List</Text>
      {users.map(user => (
        <Card
          key={user.id}
          first={user.first_name}
          last={user.last_name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </ScrollView>
  );
};

export default RestApi;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingLeft: 30,
  },
});
