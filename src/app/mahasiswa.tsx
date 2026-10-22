import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

const DAFTAR_MAHASISWA = [
  {
    id: '1',
    nama: 'Alifia Putri',
    prodi: 'Sistem Informasi',
  },
  {
    id: '2',
    nama: 'Budi Santoso',
    prodi: 'Teknologi Informasi',
  },
  {
    id: '3',
    nama: 'Citra Dewi',
    prodi: 'Sistem Informasi',
  },
  {
    id: '4',
    nama: 'Dimas Anggara',
    prodi: 'Teknik Informatika',
  },
  {
    id: '5',
    nama: 'Eka Nur Safitri',
    prodi: 'Sistem Informasi',
  },
  {
    id: '6',
    nama: 'Wesly',
    prodi: 'Sistem Informasi',
  },
];

export default function StudentsScreen() {
  const [keyword, setKeyword] = useState('');

  const mahasiswaFiltered = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().startsWith(keyword.toLowerCase())
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={mahasiswaFiltered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <View>
                <Text style={styles.eyebrow}>CAMPUS DIRECTORY ✦</Text>
                <Text style={styles.heading}>Students</Text>
              </View>

              <View style={styles.countCircle}>
                <Text style={styles.count}>
                  {mahasiswaFiltered.length}
                </Text>

                <Text style={styles.countLabel}>found</Text>
              </View>
            </View>

            <Text style={styles.description}>
              Cari mahasiswa berdasarkan nama.
            </Text>

            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>

              <TextInput
                style={styles.searchInput}
                placeholder="Cari nama mahasiswa..."
                placeholderTextColor="#9A958D"
                value={keyword}
                onChangeText={setKeyword}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                STUDENT LIST
              </Text>

              <Text style={styles.resultText}>
                {mahasiswaFiltered.length} result
                {mahasiswaFiltered.length !== 1 ? 's' : ''}
              </Text>
            </View>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={styles.studentItem}>
            <View style={styles.numberContainer}>
              <Text style={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </Text>
            </View>

            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>
                {item.nama}
              </Text>

              <Text style={styles.studentProdi}>
                {item.prodi}
              </Text>
            </View>

            <Text style={styles.arrow}>↗</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptySymbol}>:(</Text>

            <Text style={styles.emptyTitle}>
              Data tidak ditemukan!
            </Text>

            <Text style={styles.emptyDescription}>
              Coba gunakan nama mahasiswa yang lain.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1EA',
  },

  listContent: {
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
    letterSpacing: 1.8,
    color: '#88837B',
    marginBottom: 10,
  },

  heading: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '800',
    color: '#171717',
    letterSpacing: -1,
  },

  countCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  count: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  countLabel: {
    color: '#BDBDBD',
    fontSize: 9,
    marginTop: -1,
  },

  description: {
    fontSize: 13,
    lineHeight: 20,
    color: '#858078',
    marginTop: 14,
    marginBottom: 22,
  },

  searchBox: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD9D1',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 28,
  },

  searchIcon: {
    fontSize: 25,
    color: '#77736C',
    marginRight: 8,
    marginTop: -3,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#202020',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.8,
    color: '#777169',
  },

  resultText: {
    fontSize: 11,
    color: '#9A958D',
  },

  studentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    minHeight: 78,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E8E5DF',
    borderRadius: 15,
    marginBottom: 10,
  },

  numberContainer: {
    width: 35,
  },

  number: {
    fontSize: 11,
    fontWeight: '800',
    color: '#B0AAA1',
  },

  studentInfo: {
    flex: 1,
    paddingRight: 10,
  },

  studentName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1C',
    marginBottom: 5,
  },

  studentProdi: {
    fontSize: 12,
    color: '#858078',
  },

  arrow: {
    fontSize: 20,
    color: '#55504A',
  },

  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 55,
    paddingHorizontal: 20,
  },

  emptySymbol: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FF6B35',
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#242424',
    marginBottom: 6,
  },

  emptyDescription: {
    fontSize: 12,
    color: '#8A857D',
    textAlign: 'center',
  },


});