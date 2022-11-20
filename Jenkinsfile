pipeline { 
  agent any
  tools { 
    gradle "NodeJs"
  }
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/brianmarete/mytodolist'
      }
    }
    stage('Build the project') {
      steps { 
        sh 'npm install build'
      }
    }
    stage('Heroku deploy') {
      steps { 
        sh 'Credentials'
      }
    stage('Tests') {
      steps { 
        sh 'gradle test'
      }
    }
  }
}