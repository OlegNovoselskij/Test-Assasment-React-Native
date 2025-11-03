import {StatusBar, StyleSheet, useColorScheme, View, ScrollView, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {CountdownSection} from './src/components/CountdownSection';
import {DebouncedCounterSection} from './src/components/DebouncedCounterSection';
import {PressAndHoldSection} from './src/components/PressAndHoldSection';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={[styles.container, isDarkMode ? styles.darkBg : styles.lightBg]}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={[styles.header, isDarkMode ? styles.headerDark : styles.headerLight]}>React Native Test Task</Text>
          <View style={styles.section}>
            <CountdownSection />
          </View>
          <View style={styles.section}>
            <DebouncedCounterSection />
          </View>
          <View style={styles.section}>
            <PressAndHoldSection />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightBg: {backgroundColor: '#F9FAFB'},
  darkBg: {backgroundColor: '#0B0F17'},
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerLight: {color: '#111827'},
  headerDark: {color: '#E5E7EB'},
  section: {
    // each card within a section
  },
});

export default App;
