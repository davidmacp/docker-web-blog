pipeline {
  agent any

  stages {
    stage('Build') {
      environment {
        // 'This value is exported to all commands in this stage'
        IMAGE_TAG = "${env.BRANCH_NAME}"
        HOST_BUILD = ":2375"
        IMAGE_NAME = ":5000//:${env.BRANCH_NAME}"

        GIT_COMMIT_EMAIL = sh (
          script: 'git --no-pager show -s --format=\'%ae\'',
          returnStdout: true
        ).trim()

        BRANCH_TAG = sh (
          script: "echo ${env.BRANCH_NAME} | sed 's/\//-/g'",
          returnStdout: true
        ).trim()
      }
      
      steps {
        echo 'Building...'

        sh 'echo "HI"'
        sh "echo ${env.BUILD_TAG}"
        sh "echo ${env.BRANCH_NAME}"
        sh "echo $BRANCH_TAG"

        sh "echo $GIT_COMMIT_EMAIL"

        sh "docker rm friendlyhello"
        sh "docker build -t friendlyhello ."
        sh "docker tag friendlyhello jimlambie/hello:${env.BUILD_ID}"
        sh "docker push jimlambie/hello:${env.BUILD_ID}"
        sh "docker rmi jimlambie/hello:${env.BUILD_ID}"
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying...'

        sh "docker pull jimlambie/hello:${env.BUILD_ID}"
        sh "docker run -d --restart=always --name 'hello' -e NODE_ENV=test -p 50000:3001 jimlambie/hello:${env.BUILD_ID}"
      }
    }
  }
}
