pipeline{
    agent any
    stages{
        stage("Workspace Cleanup"){
            steps{
                script{
                    cleanWs()
                }
            }
        }
        stage("cloning"){
            steps{
                echo "cloning code..."
                git url: 'https://github.com/suryanshvermaa/Conference_website.git',branch: 'main'
                echo "cloning code successful."
            }
        }
        stage("copy env file"){
            steps{
                echo "copying env file..."
                sh "cp /env/conference-site/app.env ./app.env"
                echo "copying env file successful."
            }
        }
        stage("deploying"){
            steps{
                echo "deploying application..."
                sh "docker compose -f docker-compose.prod.yml up -d --build"
                echo "application deployed successfully."
            }
        }
    }
}