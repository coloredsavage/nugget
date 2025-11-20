/**
 * Design System - Typography
 * Based on Nugget app design mockups
 */

export const Typography = {
  // Font Families
  fonts: {
    serif: 'Roslindale-DisplayCondensedRegular',  // Loaded via expo-font
    sans: 'System',                                // SF Pro (iOS default)
  },

  // Font Sizes
  sizes: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 48,
  },

  // Font Weights
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },

  // Line Heights
  lineHeights: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export type FontFamily = keyof typeof Typography.fonts;
export type FontSize = keyof typeof Typography.sizes;
export type FontWeight = keyof typeof Typography.weights;
