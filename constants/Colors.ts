/**
 * Design System - Colors
 * Based on Nugget app design mockups
 */

export const Colors = {
  // Background
  black: '#000000',           // Pure black background
  darkGray: '#1F2937',        // Card backgrounds (secondary)

  // Brand
  primary: '#FF5A24',         // Primary orange brand color
  primaryLight: '#FF7347',    // Lighter orange for gradients
  primaryDark: '#E54D1C',     // Darker orange for gradients

  // Text
  white: '#FFFFFF',           // Primary text
  textLight: '#F5F5DC',       // Light cream text
  textGray: '#D1D5DB',        // Secondary text
  textMuted: '#9CA3AF',       // Muted text
  textDark: '#6B7280',        // Dark gray text

  // UI Elements
  cream: '#F5F5DC',           // Card backgrounds (cream)
  border: '#374151',          // Border colors

  // States
  success: '#10B981',         // Success/active states
  warning: '#F59E0B',         // Warning states
  error: '#EF4444',           // Error states

  // Social
  twitter: '#1DA1F2',
  instagram: '#E4405F',
} as const;

export type ColorKey = keyof typeof Colors;
