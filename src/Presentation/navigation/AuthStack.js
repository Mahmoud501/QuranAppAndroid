// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';

// import LoginPage from '../Scenes/Auth/Login/LoginPage';
// import ForgetPasswordPage from '../Scenes/Auth/ForgetPassword/ForgetPasswordPage';
// import RegisterPage from '../Scenes/Auth/Resigter/RegisterPage';
// import LocationsPage from '../Scenes/Home/Locations/LocationsPage';
// import VerifyPage from '../Scenes/Auth/Verification/VerifyPage';
// import ResetPasswordPage from '../Scenes/Auth/ResetPassword/ResetPasswordPage';

// const Stack = createStackNavigator();

// const AuthStack = ({initialRouteName, route}) => {
//   let withBack = route.params?.withBack;
//   return (
//     <Stack.Navigator
//       initialRouteName={route.params?.firstRoute ?? initialRouteName}
//       headerMode="none">
//       <Stack.Screen
//         name="LoginPage"
//         component={LoginPage}
//         initialParams={{withBack: withBack}}
//       />
//       <Stack.Screen name="ForgetPasswordPage" component={ForgetPasswordPage} />
//       <Stack.Screen name="RegisterPage" component={RegisterPage} />
//       <Stack.Screen
//         name="LocationsPage"
//         component={LocationsPage}
//         initialParams={{withoutBack: true}}
//       />
//       <Stack.Screen name="VerifyPage" component={VerifyPage} />
//       <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
//     </Stack.Navigator>
//   );
// };

// export default AuthStack;
