import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { calculateBMI } from '../services/bmiService';

export default function CalculatorScreen() {
  const [form, setForm] = useState({ name: '', age: '', height: '', weight: '' });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!form.weight || !form.height) return;
    const res = calculateBMI(parseFloat(form.weight), parseFloat(form.height));
    setResult({ ...res, ...form });
  };

  const handleReset = () => {
    setForm({ name: '', age: '', height: '', weight: '' });
    setResult(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>BMI Calculator</Text>
      <Text style={styles.subTitle}>Track your health with precise BMI calculations</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Personal Information</Text>
        <TextInput placeholder="Enter your name" style={styles.input} onChangeText={(val) => setForm({...form, name: val})} value={form.name} />
        <TextInput placeholder="Enter your age" keyboardType="numeric" style={styles.input} onChangeText={(val) => setForm({...form, age: val})} value={form.age} />
        <TextInput placeholder="Height in cm" keyboardType="numeric" style={styles.input} onChangeText={(val) => setForm({...form, height: val})} value={form.height} />
        <TextInput placeholder="Weight in kg" keyboardType="numeric" style={styles.input} onChangeText={(val) => setForm({...form, weight: val})} value={form.weight} />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.calcBtn} onPress={handleCalculate}>
          <Text style={styles.btnText}>Calculate BMI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
          <Text style={[styles.btnText, {color: '#666'}]}>Reset</Text>
        </TouchableOpacity>
      </View>

      {result && (
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>BMI Result</Text>
          <Text style={[styles.bmiValue, {color: result.color}]}>{result.bmi}</Text>
          <Text style={[styles.statusText, {color: result.color}]}>{result.status}</Text>
          <Text style={styles.msgText}>{result.message}</Text>
          <View style={styles.divider} />
          <Text style={styles.details}>Name: {result.name}</Text>
          <Text style={styles.details}>Age: {result.age} years</Text>
          <Text style={styles.details}>Height: {result.height} cm</Text>
          <Text style={styles.details}>Weight: {result.weight} kg</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  subTitle: { textAlign: 'center', color: '#666', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 15, padding: 20, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#eee', borderRadius: 10, padding: 12, marginBottom: 15 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  calcBtn: { backgroundColor: '#10b981', padding: 15, borderRadius: 12, flex: 2, marginRight: 10, alignItems: 'center' },
  resetBtn: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee', padding: 15, borderRadius: 12, flex: 1, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  resultCard: { backgroundColor: '#fff', borderRadius: 15, padding: 20, marginTop: 20, borderLeftWidth: 5, borderLeftColor: '#3b82f6', elevation: 3 },
  bmiValue: { fontSize: 48, fontWeight: 'bold', textAlign: 'center' },
  statusText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  msgText: { textAlign: 'center', color: '#666', marginBottom: 10 },
  details: { fontSize: 14, color: '#444', marginTop: 4 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 10 }
});