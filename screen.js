import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockHistory = [
  { id: '1', name: 'Akanksha', bmi: '15.6', status: 'Underweight', date: '13/04/2026', height: '156', weight: '38', age: '21' },
  { id: '2', name: 'Vaishnavi', bmi: '15.6', status: 'Underweight', date: '13/04/2026', height: '168', weight: '44', age: '21' },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BMI History</Text>
      <FlatList
        data={mockHistory}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyCard}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.contentRow}>
               <View>
                  <Text style={styles.bmiVal}>{item.bmi}</Text>
                  <Text style={styles.status}>{item.status}</Text>
               </View>
               <View style={styles.detailsCol}>
                  <Text>Age: {item.age}</Text>
                  <Text>Height: {item.height} cm</Text>
                  <Text>Weight: {item.weight} kg</Text>
               </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  historyCard: { backgroundColor: '#fff', borderRadius: 15, padding: 15, marginBottom: 15, elevation: 4, borderLeftWidth: 4, borderLeftColor: '#3b82f6' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 18, fontWeight: 'bold' },
  date: { color: '#888' },
  contentRow: { flexDirection: 'row', marginTop: 10, alignItems: 'center' },
  bmiVal: { fontSize: 28, fontWeight: 'bold', color: '#3b82f6' },
  status: { color: '#3b82f6', fontWeight: 'bold' },
  detailsCol: { marginLeft: 30 }
});