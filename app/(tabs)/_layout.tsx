import { Tabs } from 'expo-router';
import { Colors, Layout } from '../../constants';
import { HomeIcon, LibraryIcon, SearchIcon, MoreIcon, AddIcon } from '../../components/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.textLight,
        tabBarInactiveTintColor: '#535256',
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderTopColor: Colors.black,
          height: Layout.dimensions.tabBarHeight,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon size={28} color={focused ? Colors.textLight : '#535256'} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, focused }) => (
            <LibraryIcon size={28} color={focused ? Colors.textLight : '#535256'} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <AddIcon size={44} />
          ),
        }}
      />
      <Tabs.Screen
        name="share"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <SearchIcon size={28} color={focused ? Colors.textLight : '#535256'} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <MoreIcon size={28} color={focused ? Colors.textLight : '#535256'} />
          ),
        }}
      />
    </Tabs>
  );
}
