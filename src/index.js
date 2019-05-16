// @flow
import { createHash } from "crypto";
import kebabCase from "lodash.kebabcase";

// Given a string `input` get the first `length` characters of the md5 hash of
// the `input` string. This effectively creates a "short" hash for a given
// input.
const shortHash = (input: string, length: number = 3): string =>
  createHash(`md5`)
    .update(input)
    .digest(`hex`)
    .substr(0, length);

// Given `input` return the kebab case version with a short has appended.
// Add a default path length limit and generate a useful path with the first (pathLength/2) characters and the last (pathLength/2) chars
const kebabHash = (path: string, hashLength: number = 3, pathLength: number = 60): string => {
  let mutated_path = kebabCase(path);
  if(mutated_path.length > pathLength){
    mutated_path = `${mutated_path.substr(0, pathLength/2)}-${mutated_path.substr(mutated_path.length-(pathLength/2), pathLength/2)}`
  }
  return `${mutated_path}-${shortHash(path, hashLength)}`;
}

export default kebabHash;
