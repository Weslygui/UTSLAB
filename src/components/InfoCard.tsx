import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type InfoCardProps = {
  title: string;
  status: 'selesai' | 'proses';
  onPress: () => void;
};

export default function InfoCard({
  title,
  status,
  onPress,
}: InfoCardProps) {
  const isDone = status === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.taskLabel}>TASK</Text>

        <View
          style={[
            styles.statusBadge,
            isDone ? styles.doneBadge : styles.processBadge,
          ]}
        >
          <View
            style={[
              styles.dot,
              isDone ? styles.doneDot : styles.processDot,
            ]}
          />

          <Text
            style={[
              styles.statusText,
              isDone ? styles.doneText : styles.processText,
            ]}
          >
            {isDone ? 'DONE' : 'ONGOING'}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.action}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.actionText}>Lihat Detail</Text>
        <Text style={styles.arrow}>↗</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E8E5DF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#A19D96',
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 30,
  },

  doneBadge: {
    backgroundColor: '#E8F7EA',
  },

  processBadge: {
    backgroundColor: '#FFF0DA',
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 6,
  },

  doneDot: {
    backgroundColor: '#35A853',
  },

  processDot: {
    backgroundColor: '#F59E0B',
  },

  statusText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  doneText: {
    color: '#27853D',
  },

  processText: {
    color: '#C87500',
  },

  title: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '700',
    color: '#171717',
    marginTop: 24,
    marginBottom: 22,
  },

  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EFEDE9',
    paddingTop: 14,
  },

  actionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#292929',
  },

  arrow: {
    fontSize: 20,
    color: '#292929',
  },
});