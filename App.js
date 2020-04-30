import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {WLResourceRequest, WLClient} from 'react-native-ibm-mobilefirst';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue';

const securityCheckName = 'PinCodeAttempts';

export class PinCodeChallengeHandler {
  // Handle Challenge
  handleChallenge = challenge => {
    var msg = '';
    // Create the title string for the prompt
    if (challenge.errorMsg !== null) {
      msg = challenge.errorMsg + '\n';
    } else {
      msg = 'This data requires a PIN code.\n';
    }
    msg += 'Remaining attempts: ' + challenge.remainingAttempts;
    Alert.prompt('Alert', msg, [
      {
        text: 'Cancel',
        onPress: () => WLClient.cancelChallenge(securityCheckName),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: pin =>
          WLClient.submitChallengeAnswer(securityCheckName, {pin: pin}),
      },
      s,
    ]);
  };

  // Handle Success
  handleSuccess = success => {};

  //Handle Failure
  handleFailure = error => {
    console.log('Challenge Handler Failure!');
    if (error.failure !== null && error.failure !== undefined) {
      alert(error.failure);
    } else {
      alert('Unknown error');
    }
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };

    this.getBalance = this.getBalance.bind(this);
  }

  async componentDidMount() {
    // register challenge handler
    var challengeHandler = new PinCodeChallengeHandler();
    WLClient.registerChallengeHandler(challengeHandler, securityCheckName);
  }

  getBalance(done) {
    var resourceRequest = new WLResourceRequest(
      '/adapters/ResourceAdapter/balance',
      WLResourceRequest.GET,
    );
    resourceRequest.send().then(
      response => {
        console.log('resourceRequest.send success: ' + response.responseText);
        this.setState({
          result:
            'SUCCESS' + '\n\n' + 'Total Balance : ' + response.responseText,
        });
        done();
      },
      error => {
        console.log('resourceRequest.send failure: ' + JSON.stringify(error));
        this.setState({
          result: 'FAILURE' + '\n\n' + 'Failed to fetch Balance',
        });
        done();
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pincode</Text>
        <View style={styles.testItemsContainer}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              // justifyContent: "center",
              width: '100%',
              padding: 10,
            }}>
            <AwesomeButton
              type="primary"
              progress
              stretch
              onPress={done => {
                this.getBalance(done);
              }}>
              Get Balance
            </AwesomeButton>
          </View>
        </View>
        <View style={styles.testResultsContainer}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              textAlign: 'center',
              marginVertical: 5,
            }}>
            RESULTS
          </Text>
          <Text style={{color: 'black', fontSize: 16, margin: 10}}>
            {this.state.result}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#ededed',
  },
  testItemsContainer: {
    marginTop: 30,
    height: '60%',
    width: '100%',
  },
  testResultsContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#bfbfbf',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 30,
    paddingBottom: 10,
  },
  buttonStyle: {
    width: '100%',
  },
  buttonContainer: {
    margin: 5,
  },
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  charan: {
    alignItems: 'center',
  },
});
