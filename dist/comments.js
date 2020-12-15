"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentTypes = void 0;
exports.commentTypes = [
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
//# sourceMappingURL=comments.js.map