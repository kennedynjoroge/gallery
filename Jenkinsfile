pipeline { 
  agent any
  tools { 
    nodejs "NodeJs"
  }
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/brianmarete/mytodolist'
      }
    }
    stage('Build the project') {
      steps { 
        sh 'npm install'
      }
    }

    stage('Tests') {
      steps { 
        sh 'npm test'
      }
    }
    stage('Heroku deploy') {
      steps {
                withCredentials ([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                     sh "git push  https://${HEROKU_CREDENTIALS}@git.heroku.com/gallerykenya.git master"
        }
      }
  
    }
    post{
        success {
            slackSend colour: "green", message: "Deployment Successful!"
        }
    }
  }
}