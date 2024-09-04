// import { useFonts } from "expo-font";
// import React from "react";
// import { Stack } from "expo-router"; // Keep the import from expo-router
// // import AppLoading from "expo-app-loading";

// export default function RootLayout() {
  
//   useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     SpaceMono: require('../assets/fonts/inter.ttf'),
//   });

//   // if (!fontsLoaded) {
//   //   return <AppLoading />;
//   // }

//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="login/farmer/index" />
//       <Stack.Screen name="login/buyer/index" />
//     </Stack>
//   );
// }


import React, { useState, useEffect } from "react";
import { Stack } from "expo-router"; // Keep the import from expo-router
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./../assets/fonts/inter.ttf'), // Update the path if necessary
    'space': require('./../assets/fonts/SpaceMono-Regular.ttf'), // Update the path if necessary
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true); // Set ready state when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!isReady) {
    return null; // Render nothing or a loading indicator while fonts are loading
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/farmer/index" />
      <Stack.Screen name="login/buyer/index" />
    </Stack>
  );
}

