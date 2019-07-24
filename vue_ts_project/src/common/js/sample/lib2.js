var randStrSeed = "abcdefghijklmnopqrstuvwxyz0123456789";

export function randomString(length) {
  var ret = "";
  while (length-- > 0) {
    ret += randStrSeed[Math.floor(Math.random() * randStrSeed.length)];
  }
  return ret;
}
