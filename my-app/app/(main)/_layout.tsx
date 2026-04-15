import {  Stack  } from 'expo-router'

const MainLayout  = () => {
  return (
    <Stack>
      <Stack.Screen name='login' options={{ title: 'Login'  }} />
      <Stack.Screen name='dashboard' options={{ title: 'Dashboard' }} />
    </Stack>
  );
};

export default MainLayout;