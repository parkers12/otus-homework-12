import ICRUD from "./types/ICRUD";

import Storage from "./LS/storage";
import Firebase from "./FB/firebase";

const getStorage = (storageType: "LS" | "FB"): ICRUD => {
  if (storageType === "FB") {
    return new Firebase("FB");
  }
  return new Storage("LS");
};

export default getStorage;

// const storage: ICRUD = getStorage("LS");
// const storage: ICRUD = getStorage("FB");
