import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Tambah = ()=>{
    return (
    <View style={styles.container}>
      <Text style={styles.text}>T2 Praktikum DPM</Text>
      <Text style={styles.text}>FERINA NUR ANNISA</Text>
      <Text style={styles.text}>223510344</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light-gray', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', // Gaya teks tebal (bold)
    marginBottom: 15, // Spasi bawah untuk memisahkan teks dari kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Lebar relatif terhadap layar
  },
  box1: {
    backgroundColor: 'mediumpurple', // Warna kotak 1 (bebas, diatur ke medium purple)
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'plum', // Warna kotak 2 (bebas, diatur ke warna plum)
    width: 100,
    height: 100,
  },
});
export default Tambah;