pipeline {
    agent any

    tools {
        maven 'Maven 3.5.0'
        jdk 'jdk8'
        docker 'Docker'
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
                Docker.image('maven:3.3.3-jdk-8').inside {
                    git 'https://github.com/kserio/DieterBackend.git'
                    sh 'mvn -B clean install'
                }
            }
        }
    }
}