pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "anshumanbhandari7/react-app"
    }

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE:${BUILD_NUMBER} ."
                sh "docker tag $DOCKER_IMAGE:${BUILD_NUMBER} $DOCKER_IMAGE:latest"
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh "docker push $DOCKER_IMAGE:${BUILD_NUMBER}"
                sh "docker push $DOCKER_IMAGE:latest"
            }
        }
    }

    post {
        success {
            echo "Image pushed successfully 🚀"
        }
        failure {
            echo "Build failed ❌"
        }
    }
}
