import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text style={styles.linkText}>← Go back</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#11181C',
    marginBottom: 16,
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#0a7ea4',
  },
});
