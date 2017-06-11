pipeline {
    agent any

    def mvnHome

    stages {
        stage('Preparation') {
            git 'https://github.com/kserio/DieterBackend.git'
            mvnHome = tool 'M3'
        }
        stage('Build') {
            steps {
                echo 'Building..'
                echo ${mvnHome}
                sh "mvn --version"
                sh "'${mvnHome}/bin/mvn' -Dmaven.test.failure.ignore clean package"
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