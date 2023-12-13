pipeline {
    agent any
    stages {
        stage('Debug') {
            steps {
                echo 'Starting pipeline execution...'
                sh 'env'
            }
        }
        stage('Check Environment') {
            steps {
                echo 'Checking Environment...'
                sh 'docker ps'
            }
        }
        stage('Build and Deploy HotFreshGames Locally') {
            steps {
                sh '''
                    docker build -t hotfreshgames-website .
                    docker stop hotfreshgames-website-container || true
                    docker rm hotfreshgames-website-container || true
                    docker run -d -p 8081:80 -p 8082:443 \
                        -v /etc/letsencrypt/live/hotfreshgames.com/fullchain.pem:/etc/nginx/ssl/fullchain.pem:ro \
                        -v /etc/letsencrypt/live/hotfreshgames.com/privkey.pem:/etc/nginx/ssl/privkey.pem:ro \
                        --name hotfreshgames-website-container hotfreshgames-website
                '''
            }
        }
        stage('Celebrate good times!') {
            steps {
                echo 'We are celebrating...'
            }
        }
    }
}
