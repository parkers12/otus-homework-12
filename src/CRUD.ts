import CRUD from "./types/CRUD";

import Storage from "./LS/storage";
import Firebase from "./FB/firebase";

const getStorage = (storageType: "LS" | "FB"): CRUD => {
  if (storageType === "FB") {
    return new Firebase("FB");
  }
  return new Storage("LS");
};

export default getStorage;

// const storage: CRUD = getStorage("LS");
// const storage: CRUD = getStorage("FB");
