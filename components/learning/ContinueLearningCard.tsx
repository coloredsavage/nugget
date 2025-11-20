import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Layout, Typography } from '../../constants';

interface ContinueLearningCardProps {
  title: string;
  status: string;
  progress: number;
  imageUri?: string;
  onPress?: () => void;
}

export const ContinueLearningCard: React.FC<ContinueLearningCardProps> = ({
  title,
  status,
  progress,
  imageUri,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage} />
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.progress}>{progress}%</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginRight: Layout.spacing.md,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: Layout.radius.lg,
    overflow: 'hidden',
    marginBottom: Layout.spacing.md,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.cream,
  },
  info: {
    paddingHorizontal: 4,
  },
  title: {
    fontSize: Typography.sizes.md,
    fontWeight: Typography.weights.medium,
    color: Colors.white,
    marginBottom: 4,
  },
  status: {
    fontSize: Typography.sizes.sm,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  progress: {
    fontSize: Typography.sizes.sm,
    color: Colors.textMuted,
  },
});
