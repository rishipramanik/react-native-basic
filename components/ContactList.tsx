import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Active',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'Offline',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: 3,
      name: 'Alex Johnson',
      status: 'Active',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      uid: 4,
      name: 'Emily Brown',
      status: 'Away',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {},
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {},
  userStatus: {},
});
