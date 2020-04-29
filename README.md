## PinCodeCordova
A sample application demonstrating use of the CredentialsValidation Security Check.

### Tutorials
https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/authentication-and-security/credentials-validation/

### Usage

1. Use either Maven, MobileFirst CLI or your IDE of choice to [build and deploy the available `ResourceAdapter` and `PinCodeAttempts` adapters](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/adapters/creating-adapters/).

 The PinCodeAttempts Security Check adapter can be found in https://github.com/MobileFirst-Platform-Developer-Center/SecurityCheckAdapters/tree/release80.

2. From the command-line window, navigate to the project's roots folder and run the commands:
 - `npm install` - to install project dependencies.
 - `react-native link` - to link libraries to respective platforms based on dependencies.

3. From a command-line window, navigate to the platforms's root folder (either iOS or Android)  and run the commands:
 - `mfpdev app register` - to register the application.
 - `pod install` - to install cocoapod dependencies [This step only required for iOS].
 
4. From the command-line window, navigate to the project's roots folder and run the command:
 - `react-native run-ios` or `react-native run-android` - to run the application in an iOS Emulator or Android Simulator.

5. Run the application in an Android Rmulator, iOS Simulator or physical device. Press the **Get Balance** button and enter "1234" to display the balance.

### Version
React-Native : 0.61.5

### Supported Levels
IBM MobileFirst Platform Foundation 8.0

### License
Copyright 2020 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
att
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
