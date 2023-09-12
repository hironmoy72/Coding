# Coding
Setup
Run npm i to install dependencies from package.json

Running tests
Before running tests locally the cucumber-json-formatter needs to be installed on your machine. Please note that the formatter version are varied based on your machine system. This is needed to handle test result output.

MacOS

Download cucumber-json-formatter-darwin-amd64 and rename it to cucumber-json-formatter
Move it to a directory that's on your PATH
Make it executable with chmod +x cucumber-json-formatter
Verify that you can run it: cucumber-json-formatter --help
At the last step, you may get a security warning from MacOS. If you do, open System Preferences. Go to Security Settings. You should see a question asking if you want to open it anyway. Say yes.

npx cypress run to run tests via command line (in headless mode)
npx cypress open to run tests via the Cypress UI test runner
