import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Madadgar</Text>
      <Text style={styles.subtitle}>Premium local service marketplace</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Foundation setup coming next</Text>
      </View>
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
    fontSize: 36,
    fontWeight: '700',
    color: '#11181C',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#687076',
    marginBottom: 32,
    textAlign: 'center',
  },
  badge: {
    borderWidth: 1,
    borderColor: '#0a7ea4',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  badgeText: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: '500',
  },
});
