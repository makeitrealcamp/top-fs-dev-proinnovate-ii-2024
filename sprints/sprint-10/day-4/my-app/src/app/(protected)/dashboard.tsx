
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '@/src/context/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, {user.name}!</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>New Messages</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Pending Orders</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>20</Text>
          <Text style={styles.statLabel}>Notifications</Text>
        </View>
      </View>


      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>
            You placed an order for "Product A".
          </Text>
          <Text style={styles.activityTime}>2 hours ago</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>
            Your review on "Product B" was approved.
          </Text>
          <Text style={styles.activityTime}>Yesterday</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  activitiesContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 1,
  },
  activityText: {
    fontSize: 16,
  },
  activityTime: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});
