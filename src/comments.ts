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
