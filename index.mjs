import * as readline from "node:readline";
import translate from "node-google-translate-skidz";
import chalk from "chalk";

const [, , flag] = process.argv;

if (flag) {
  console.log(
    chalk.yellowBright(
      `You can interpret a text by entering the source language and also the target language according to the ISO-639-1 Code 
listed at ${chalk.underline(
        "https://cloud.google.com/translate/docs/languages"
      )}`
    )
  );
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `Source Language ${chalk.greenBright("(ISO-639-1 Code)")} : `,
    (source) => {
      rl.question(
        `Target Language ${chalk.greenBright("(ISO-639-1 Code)")} : `,
        (target) => {
          rl.question("\nYour Text : \n", (text) => {
            translate(
              {
                text,
                source,
                target,
              },
              (result) => {
                console.log(`\nResult : 
${chalk.cyan(result.translation)}`);
              }
            );
            rl.close();
          });
        }
      );
    }
  );
}
