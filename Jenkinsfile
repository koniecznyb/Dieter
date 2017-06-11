pipeline {
    agent any

    tools {
        maven 'Maven 3.5.0'
        jdk 'jdk8'
    }

    stages {
        stage('Preparation') {
            steps{
                git 'https://github.com/kserio/DieterBackend.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh "mvn -DskipTests=true clean package"
            }
        }
        stage('Test') {
            steps {
                echo 'mvn clean verify'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}