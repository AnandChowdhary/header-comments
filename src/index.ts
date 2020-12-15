import { getInput, setFailed } from "@actions/core";
import recursiveReaddir from "recursive-readdir";
import { join } from "path";
import { commentTypes } from "./comments";
import { readFile, writeFile } from "fs/promises";

export const run = async () => {
  const commentText = await readFile(join(".", ".github", "FILE_HEADER"), "utf8");
  const allFiles = await recursiveReaddir(join(".", ...(getInput("directory") || "").split("/")));
  for await (const commentType of commentTypes) {
    let comment = ``;
    if (commentType.firstLine) comment += `${commentType.firstLine}\n`;
    commentText.split("\n").forEach((line) => {
      comment += `${commentType.middleLinePrefix}${line}\n`;
    });
    if (commentType.lastLine) comment += `${commentType.lastLine.trim()}\n`;
    for await (const extension of commentType.extensions) {
      const files = allFiles.filter((file) => file.endsWith(`.${extension}`));
      for await (const file of files) {
        const contents = await readFile(file, "utf8");
        if (contents.split("\n").pop() !== comment.split("\n").pop()) {
          await writeFile(file, `${comment}\n${contents}`);
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
