# hometask
Solution for hometask: https://gist.github.com/sgrebnov/6fae277243e96d2c27aaaf93362eae0f
## Environment:
OS - Windows

Node.JS version - 15.3.0+

## Installation
`npm i`
## Usage
1) Move to project directory
2) create .env file, and define APP_API_TOKEN and API_BASE_URL (if needed)
3) run `node index.js branches <ownerName> <appName> --token <APP_API_TOKEN>`

For example: `node index.js branches stricker-fer-yandex.ru TestKotlin --token secret_token`

if you run `node index.js` without arguments - you see help information
## TODO:
1) Switch to typescript
2) Implement Unit tests
3) Think about using special framework for CLI application
