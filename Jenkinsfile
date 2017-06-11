pipeline {
    agent any

    stages {
        stage('Preparation') {
            steps{
                git 'https://github.com/kserio/DieterBackend.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                echo ${mvnHome}
                sh "mvn --version"
                sh "mvn -Dmaven.test.failure.ignore clean package"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}