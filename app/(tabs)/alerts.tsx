import { StyleSheet, Text, View } from 'react-native';

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerts</Text>
      <Text style={styles.subtitle}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#11181C',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#687076',
  },
});
