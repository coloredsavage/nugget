import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ShareScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Share</Text>
          <Text style={styles.subtitle}>Share your learning journey</Text>
        </View>

        {/* Streak Card Preview */}
        <View style={styles.streakCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="flame" size={32} color="#FF6B35" />
            <Text style={styles.streakNumber}>0</Text>
          </View>
          <Text style={styles.streakText}>Day Learning Streak</Text>
          <Text style={styles.appName}>Nugget</Text>
        </View>

        {/* Share Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Share Your Streak</Text>

          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
            <Text style={styles.shareButtonText}>Share on Twitter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="logo-instagram" size={24} color="#E4405F" />
            <Text style={styles.shareButtonText}>Share on Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-outline" size={24} color="#FFFFFF" />
            <Text style={styles.shareButtonText}>Share via...</Text>
          </TouchableOpacity>
        </View>

        {/* Invite Friends */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Invite Friends</Text>
          <View style={styles.inviteCard}>
            <Ionicons name="people" size={40} color="#FF6B35" />
            <Text style={styles.inviteTitle}>Learn together</Text>
            <Text style={styles.inviteDescription}>
              Invite friends to join Nugget and build learning streaks together
            </Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Send Invite</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  streakCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  streakText: {
    fontSize: 18,
    color: '#D1D5DB',
    marginBottom: 8,
  },
  appName: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  shareButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 16,
    fontWeight: '600',
  },
  inviteCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  inviteTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  inviteDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  inviteButton: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
