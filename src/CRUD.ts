import ICRUD from "./types/ICRUD";

import Storage from "./LS/storage";
import Firebase from "./FB/firebase";

const getStorage = (storageType: 'LS'|'FB'):ICRUD => {
    if (storageType==='LS'){
        return new Storage();
    }
    return new Firebase();
}

export default getStorage;

// const storage: ICRUD = getStorage("LS");
// const storage: ICRUD = getStorage("FB");