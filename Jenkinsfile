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
        stage("print root paths"){
            steps{
                echo "Jenkins WORKSPACE: ${env.WORKSPACE}"
                echo "Jenkins HOME: ${env.HOME}"
                sh 'pwd && ls -la'
            }
        }
        stage("copy env file"){
            steps{
                echo "copying env file..."
                sh '''
                    set -e
                    ENV_FILE="/home/suryansh/env/conference-site/app.env"
                    if [ ! -f "$ENV_FILE" ]; then
                      echo "Missing env file at: $ENV_FILE"
                      echo "Directory listing (best-effort):"
                      ls -la "/home/suryansh/env/conference-site" || true
                      exit 1
                    fi
                    cp "$ENV_FILE" "$WORKSPACE/app.env"
                '''
                echo "copying env file successful."
            }
        }
        stage("deploying"){
            steps{
                echo "deploying application..."
                sh '''
                    set -e
                    docker rm -f app_container 2>/dev/null || true
                    docker compose -f docker-compose.prod.yml up -d --build --force-recreate
                '''
                echo "application deployed successfully."
            }
        }
    }
}