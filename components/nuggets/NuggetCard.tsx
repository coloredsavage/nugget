import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Layout, Typography } from '../../constants';
import { ProgressBar } from '../ui/ProgressBar';
import { ThreeDotsIcon, QuoteIcon } from '../icons';

interface NuggetCardProps {
  quote: string;
  bookTitle: string;
  author: string;
  progress: number;
  coverImage?: string;
  onMenuPress?: () => void;
}

export const NuggetCard: React.FC<NuggetCardProps> = ({
  quote,
  bookTitle,
  author,
  progress,
  coverImage,
  onMenuPress,
}) => {
  return (
    <LinearGradient
      colors={[Colors.primaryDark, Colors.primary, Colors.primaryLight]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
    >
      {/* Three Dots Menu with 50% opacity */}
      <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <View style={{ opacity: 0.5 }}>
          <ThreeDotsIcon size={20} color={Colors.white} />
        </View>
      </TouchableOpacity>

      {/* Quote Icon */}
      <View style={styles.quoteIconContainer}>
        <QuoteIcon size={21} />
      </View>

      {/* Quote Text - Roslindale Deck Narrow Regular, 33px, -3% letter spacing, 33 line height */}
      <Text style={styles.quoteText}>{quote}</Text>

      {/* Book Info Section */}
      <View style={styles.bookInfo}>
        <View style={styles.bookDetails}>
          {/* Book Title with 60% opacity */}
          <Text style={styles.bookTitle}>{bookTitle}</Text>
          <Text style={styles.author}>{author}</Text>
          <View style={styles.progressContainer}>
            <ProgressBar progress={progress} height={2.82} />
          </View>
          <Text style={styles.progressText}>{progress}% Complete</Text>
        </View>

        {/* Book Cover Thumbnail with 30px white border at 30% opacity */}
        {coverImage && (
          <View style={styles.coverContainer}>
            <Image source={{ uri: coverImage }} style={styles.coverImage} />
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: Layout.radius['2xl'],
    padding: Layout.spacing.xl,
    marginHorizontal: Layout.spacing.base,
    ...Layout.shadows.medium,
  },
  menuButton: {
    position: 'absolute',
    top: Layout.spacing.base,
    right: Layout.spacing.base,
    padding: Layout.spacing.sm,
    zIndex: 10,
  },
  quoteIconContainer: {
    marginBottom: Layout.spacing.md,
  },
  quoteText: {
    fontSize: 33,
    color: Colors.white,
    fontFamily: 'Roslindale-DeckNarrowRegular',
    letterSpacing: -0.99, // -3% of 33
    lineHeight: 33,
    marginBottom: Layout.spacing.xl,
  },
  bookInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.semibold,
    color: Colors.white,
    opacity: 0.6, // 60% opacity
    marginBottom: 4,
  },
  author: {
    fontSize: Typography.sizes.sm,
    color: Colors.white,
    opacity: 0.8,
    marginBottom: Layout.spacing.sm,
  },
  progressContainer: {
    marginBottom: 6,
  },
  progressText: {
    fontSize: Typography.sizes.xs,
    color: Colors.white,
    opacity: 0.7,
  },
  coverContainer: {
    width: 48,
    height: 48,
    borderRadius: Layout.radius.sm,
    overflow: 'hidden',
    marginLeft: Layout.spacing.md,
    borderWidth: 30,
    borderColor: 'rgba(255, 255, 255, 0.3)', // White with 30% opacity
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
