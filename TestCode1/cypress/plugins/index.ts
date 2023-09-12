import cucumber from "cypress-cucumber-preprocessor";

module.exports = (
  on: (arg0: string, arg1: (file: any) => Promise<string>) => void,
  config: any
) => {
  on("file:preprocessor", cucumber());
};
