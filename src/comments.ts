/**
 * This is an example file header
 * @author Anand Chowdhary <mail@anandchowdhary.com>
 * @link https://github.com/koj-co/header-comments
*/

export const commentTypes: {
  extensions: string[];
  firstLine?: string;
  middleLinePrefix: string;
  lastLine?: string;
}[] = [
  {
    extensions: [
      "ts",
      "js",
      "c",
      "cpp",
      "go",
      "java",
      "css",
      "sass",
      "scss",
      "less",
      "php",
      "swift",
      "sql",
    ],
    firstLine: `/**`,
    middleLinePrefix: " * ",
    lastLine: ` */`,
  },
  {
    extensions: ["py"],
    middleLinePrefix: "# ",
  },
];
