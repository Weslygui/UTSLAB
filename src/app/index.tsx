import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import InfoCard from '../components/InfoCard';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>MY DAY ✦</Text>
          <Text style={styles.heading}>Let's get</Text>
          <Text style={styles.headingAccent}>things done.</Text>
        </View>

        <View style={styles.countCircle}>
          <Text style={styles.count}>5</Text>
          <Text style={styles.countLabel}>tasks</Text>
        </View>
      </View>

      <Text style={styles.date}>Thursday, 22 October 2026</Text>

      <View style={styles.divider} />

      <InfoCard
        title="Menyelesaikan laporan UTS"
        status="selesai"
        onPress={() => alert('Laporan UTS sudah selesai')}
      />

      <InfoCard
        title="Membuat component React Native"
        status="proses"
        onPress={() => alert('Detail component React Native')}
      />

      <InfoCard
        title="Menyusun dokumentasi project"
        status="proses"
        onPress={() => alert('Detail dokumentasi project')}
      />

      <InfoCard
        title="Merapikan struktur folder aplikasi"
        status="selesai"
        onPress={() => alert('Struktur folder sudah dirapikan')}
      />

      <InfoCard
        title="Melakukan testing halaman utama"
        status="proses"
        onPress={() => alert('Detail testing halaman utama')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1EA',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 65,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#88837B',
    marginBottom: 14,
  },

  heading: {
    fontSize: 36,
    lineHeight: 38,
    fontWeight: '800',
    color: '#171717',
    letterSpacing: -1,
  },

  headingAccent: {
    fontSize: 36,
    lineHeight: 38,
    fontWeight: '800',
    color: '#FF6B35',
    letterSpacing: -1,
  },

  countCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  count: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },

  countLabel: {
    color: '#BDBDBD',
    fontSize: 9,
    marginTop: -2,
  },

  date: {
    fontSize: 12,
    color: '#858078',
    marginTop: 18,
  },

  divider: {
    height: 1,
    backgroundColor: '#DAD6CE',
    marginTop: 25,
    marginBottom: 20,
  },

});