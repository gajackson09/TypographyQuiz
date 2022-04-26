//Create a study app or trivia app with new question types (other than multiple choice)
//I didnt have time to acutal implement the quiz potion, but the main skeleton is here


import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

const Stack = createNativeStackNavigator();

function mainMenu({navigation}){
  return(
  <View style={styles.container}>
    <Text>Welcome to the Typography Quiz!</Text>
    <Button 
    onPress={() => navigation.navigate("Quiz Menu")} title="Start Quiz"></Button>
    <StatusBar style="auto" />
  </View>
  );
}//end of main menu funtion

function quizScreen({navigation}){
  return(
  <View style={styles.container}>
    <Text>Press the start button to begin:</Text>
    <Button onPress={() => navigation.navigate("Question 1")} title="Actually Start Quiz"></Button>
    <StatusBar style="auto" />
  
<Button onPress={() => navigation.navigate("Main Menu")} title="Return to Main Menu"></Button>
</View>
  );
}//end of quiz menu function



//question 1
function question1({navigation}){
  //questionList
let questionOne = [
  {
    multipleAnswers: true,
    answerOptions: [
      { correct: false, answerTitle: "The production of typefaces" },
      { correct: true, answerTitle: "The overall design of type characters" },
      { correct: false, answerTitle: "The technique of arranging typefaces" },
    ],
  },

]
  
  return(
  <View style={styles.container}>
    <Text>Question 1:</Text>
    <Text>What is a typeface</Text>
    <FlatList>
      {/* //this is where the answerlist goes */} 
    </FlatList>
    <Button onPress={() => navigation.navigate("Question 2")} title="Next Question"></Button>
    <StatusBar style="auto" />
  
<Button onPress={() => navigation.navigate("Main Menu")} title="Return to Main Menu"></Button>
</View>
  );
}//end of questions 1 function


//question 2
function question2({navigation}){
  let questionTwo = [
        {
      multipleAnswers: true,
      answerOptions: [
        { correct: false, answerTitle: "Typefaces" },
        { correct: false, answerTitle: "Type family" },
        { correct: true, answerTitle: "Type styles" },
        { correct: false, answerTitle: "Type terms" },
      ],
    },
  ]
  
  return(
  <View style={styles.container}>
    <Text>Question 2:</Text>
    <Text>_______ are modified versions of font like italic, bold, condensed, and extended.</Text>
    <FlatList>
      {/* //this is where the answerlist goes */} 
    </FlatList>
    <Button onPress={() => navigation.navigate("Question 3")} title="Next Question"></Button>
    <StatusBar style="auto" />
  
<Button onPress={() => navigation.navigate("Main Menu")} title="Return to Main Menu"></Button>
</View>
  );
}//end of questions 2 function


//question 3
function question3({navigation}){
  let questionThree = [
     { 
      multipleAnswers: true,
      answerOptions: [
        { correct: false, answerTitle: "David Carson" },
        { correct: false, answerTitle: "Ed Fella " },
        { correct: false, answerTitle: "Claude Garamond" },
        { correct: true, answerTitle: "William Caslon" },
      ],
    },
  ]
  
  return(
  <View style={styles.container}>
    <Text>Question 3:</Text>
    <Text>Who was America's first type designer</Text>
    <FlatList>
      {/* //this is where the answerlist goes */} 
    </FlatList>
    <Button onPress={() => navigation.navigate("Question 4")} title="Next Question"></Button>
    <StatusBar style="auto" />
  
<Button onPress={() => navigation.navigate("Main Menu")} title="Return to Main Menu"></Button>
</View>
  );
}//end of questions 3 function


//question 4
function question4({navigation}){
  let questionFour = [
    {  
    multipleAnswers: true,
      answerOptions: [
        { correct: true, answerTitle: "Points" },
        { correct: false, answerTitle: "Inches" },
        { correct: false, answerTitle: "Lines" },
        { correct: false, answerTitle: "Weight" },
      ],
},
] 
  
  return(
  <View style={styles.container}>
    <Text>Question 4:</Text>
    <Text>Type is measured in ___.</Text>
    <FlatList>
      {/* //this is where the answerlist goes */} 
    </FlatList>
    <Button onPress={() => navigation.navigate("Question 5")} title="Next Question"></Button>
    <StatusBar style="auto" />
  
<Button onPress={() => navigation.navigate("Main Menu")} title="Return to Main Menu"></Button>
</View>
  );
}//end of questions 4 function


//question 5
function question5({navigation}){
  let questionFive = [
        {
      multipleAnswers: true,
      answerOptions: [
        { correct: false, answerTitle: "Serif" },
        { correct: false, answerTitle: "San serif" },
        { correct: true, answerTitle: "Decorative" },
        { correct: false, answerTitle: "Script" },
      ],
    },
  ]

  
  return(
  <View style={styles.container}>
    <Text>Question 5:</Text>
    <Text>This type of font can be hard to read and should be used sparingly</Text>
    <FlatList>
      {/* //this is where the answerlist goes */} 
    </FlatList>
    <Button onPress={() => navigation.navigate("Results")} title="Submit"></Button>
    <StatusBar style="auto" />
  
<Button onPress={() => navigation.navigate("Main Menu")} title="Return to Main Menu"></Button>
</View>
  );
}//end of questions 5 function


function results({navigation}){
  return(
    <View>
      <Text>Results:</Text>
      <FlatList>
      {/* //this is where the results would be posted*/} 
    </FlatList>
      <Button onPress={() => navigation.navigate("Main Menu")
    }title="Back to Main Menu"></Button>
    <StatusBar style="auto" />
    </View>
  );
}//end of results


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Menu" component={mainMenu} />
        <Stack.Screen name="Quiz Menu" component={quizScreen} />
        <Stack.Screen name="Question 1" component={question1} />
        <Stack.Screen name="Question 2" component={question2} />
        <Stack.Screen name="Question 3" component={question3} />
        <Stack.Screen name="Question 4" component={question4} />
        <Stack.Screen name="Question 5" component={question5} />
        <Stack.Screen name="Results" component={results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
