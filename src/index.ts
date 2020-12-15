import { getInput, setFailed } from "@actions/core";
import recursiveReaddir from "recursive-readdir";
import { join } from "path";
import { commentTypes } from "./comments";
import { readFileSync, writeFileSync } from "fs";

export const run = async () => {
  const commentText = readFileSync(join(".", ".github", "FILE_HEADER"), "utf8");
  const allFiles = await recursiveReaddir(join(".", ...(getInput("directory") || "").split("/")));
  for await (const commentType of commentTypes) {
    let comment = ``;
    if (commentType.firstLine) comment += `${commentType.firstLine}\n`;
    commentText.split("\n").forEach((line) => {
      comment += `${commentType.middleLinePrefix}${line}\n`;
    });
    if (commentType.lastLine) comment += `${commentType.lastLine.trim()}\n`;
    const firstCommentsLine = comment.split("\n")[comment.split("\n").length - 1];
    for await (const extension of commentType.extensions) {
      const files = allFiles.filter((file) => file.endsWith(`.${extension}`));
      for await (const file of files) {
        const contents = readFileSync(file, "utf8");
        if (contents.split("\n")[contents.split("\n").length - 1] !== firstCommentsLine) {
          writeFileSync(file, `${comment}\n${contents}`);
          console.log("Added comment", file);
        }
      }
    }
  }
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
