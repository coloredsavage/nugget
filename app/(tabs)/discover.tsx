import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search topics, books, authors..."
            placeholderTextColor="#6B7280"
          />
        </View>

        {/* Topic Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
          <TouchableOpacity style={[styles.filterChip, styles.activeChip]}>
            <Text style={styles.activeChipText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Psychology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Tech</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Languages</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Trending Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <View style={styles.contentCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardCategory}>Business</Text>
              <Ionicons name="trending-up" size={16} color="#FF6B35" />
            </View>
            <Text style={styles.cardTitle}>Atomic Habits</Text>
            <Text style={styles.cardAuthor}>by James Clear</Text>
            <Text style={styles.cardDescription}>
              Learn how tiny changes lead to remarkable results
            </Text>
          </View>
        </View>

        {/* New Releases Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Releases</Text>
          <View style={styles.contentCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardCategory}>Tech</Text>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>NEW</Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>The Pragmatic Programmer</Text>
            <Text style={styles.cardAuthor}>by David Thomas & Andrew Hunt</Text>
            <Text style={styles.cardDescription}>
              Your journey to mastery in software development
            </Text>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#FFFFFF',
  },
  filterContainer: {
    marginBottom: 24,
  },
  filterChip: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  activeChip: {
    backgroundColor: '#FF6B35',
  },
  chipText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: '600',
  },
  activeChipText: {
    color: '#FFFFFF',
    fontSize: 14,
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
  contentCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardCategory: {
    color: '#FF6B35',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardAuthor: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
  },
  newBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
});
