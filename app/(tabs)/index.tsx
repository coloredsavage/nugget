import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors, Layout, Typography } from '../../constants';
import { Avatar } from '../../components/ui/Avatar';
import { BellIcon, FlameIcon, ArrowIcon } from '../../components/icons';
import { NuggetCard } from '../../components/nuggets/NuggetCard';
import { ContinueLearningCard } from '../../components/learning/ContinueLearningCard';

export default function HomeScreen() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Avatar name="Savage" />
          <TouchableOpacity>
            <BellIcon size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>

        {/* Greeting Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.date}>{currentDate}</Text>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.greetingName}>Savage!</Text>
        </View>

        {/* Streak Counter */}
        <View style={styles.streakContainer}>
          <FlameIcon size={19.5} />
          <Text style={styles.streakNumber}>47</Text>
        </View>

        {/* Daily Nugget Card */}
        <NuggetCard
          quote="I'm always so intrigued when I listen to people talk about things they're passionate about. It could be anything: football, a passion project, their job, a color..."
          bookTitle="The Art of Storytelling"
          author="Paul Schredd"
          progress={11}
          coverImage="https://picsum.photos/200/300"
          onMenuPress={() => console.log('Menu pressed')}
        />

        {/* Continue Learning Section */}
        <View style={styles.continueLearning}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See all</Text>
              <ArrowIcon size={6} color="#A9A9A9" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.learningCardsContainer}
          >
            <ContinueLearningCard
              title="The Art of Storytelling"
              status="Active"
              progress={11}
              imageUri="https://picsum.photos/seed/book1/400/600"
            />
            <ContinueLearningCard
              title="The Art of Storytelling"
              status="Active"
              progress={11}
              imageUri="https://picsum.photos/seed/book2/400/600"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  scrollContent: {
    paddingBottom: Layout.spacing['3xl'],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.base,
    paddingTop: Layout.spacing['5xl'],
    paddingBottom: Layout.spacing.lg,
  },
  greetingSection: {
    alignItems: 'center',
    paddingHorizontal: Layout.spacing.base,
    marginBottom: 8, // 8px spacing
  },
  date: {
    fontSize: Typography.sizes.sm,
    color: Colors.textDark,
    marginBottom: 8, // 8px spacing
  },
  greeting: {
    fontSize: Typography.sizes['5xl'],
    fontFamily: Typography.fonts.serif,
    color: Colors.white,
    lineHeight: Typography.sizes['5xl'] * Typography.lineHeights.tight,
  },
  greetingName: {
    fontSize: Typography.sizes['5xl'],
    fontFamily: Typography.fonts.serif,
    color: Colors.white,
    lineHeight: Typography.sizes['5xl'] * Typography.lineHeights.tight,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8, // 8px spacing before nugget card
    gap: Layout.spacing.sm,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  streakNumber: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    color: Colors.white,
  },
  continueLearning: {
    marginTop: Layout.spacing.xl,
    paddingLeft: Layout.spacing.base,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Layout.spacing.base,
    paddingRight: Layout.spacing.base,
  },
  sectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semibold,
    color: Colors.white,
  },
  seeAllText: {
    fontSize: Typography.sizes.base,
    color: Colors.textMuted,
  },
  learningCardsContainer: {
    paddingRight: Layout.spacing.base,
  },
});
