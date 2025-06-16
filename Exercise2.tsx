import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CVApp = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Curriculum Vitae</Text>
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={require('./assets/unnamed.jpg')} />

        <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
        <TextInput style={styles.input} placeholder="Nama Lengkap" />
        <TextInput style={styles.input} placeholder="Email" />

        <Text style={styles.sectionTitle}>Pendidikan</Text>
        <Image
          style={styles.univLogo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/LOGO_UNIVERSITAS_KLABAT.png',
          }}
        />
        <Text style={styles.univName}>Universitas Klabat</Text>
        <TextInput style={styles.input} placeholder="Program Studi" />
        <TextInput
          style={styles.input}
          placeholder="Tahun Masuk dan Perkiraan Lulus"
        />

        <Text style={styles.sectionTitle}>Skills</Text>
        <Image
          style={styles.img}
          source={{
            uri: 'data:image/png;base64,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',
          }}
        />
        <TextInput style={styles.input} placeholder="Skill 1" />
        <TextInput style={styles.input} placeholder="Skill 2" />

        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Kirim CV</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CVApp;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    padding: 1,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 3,
    color: 'black',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  univLogo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  univName: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'pink',
    paddingVertical: 8,
    fontSize: 13,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
});
