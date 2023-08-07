import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export default function Board() {
  const db = getFirestore();
  const [boardTxt, setBoardTxt] = useState([]);
  useEffect(() => {
    // const readDoc = async () => {
    //   const querySnapshot = await getDocs(collection(db, "board"));
    //   querySnapshot.docChanges().forEach((each, i) => {
    //     // console.log(each.doc.data().writer);
    //     setBoardTxt(
    //       <div>
    //         <h1>{each.doc.data().title}</h1>
    //         <h1>{each.doc.data().writer}</h1>
    //       </div>
    //     );
    //   });
    //   // querySnapshot.docChanges
    //   // console.log(doc);
    //   // console.log(doc.data());
    //   // console.log(doc.id);
    //   // console.log(doc.ref);
    // };
    // readDoc();
    // onSnapshot(doc(db, "board", "title"), (doc) => {
    //   console.log(doc.data());
    // });
  }, [db]);
  return (
    <div>
      <Link to="write">글쓰기</Link>
    </div>
  );
}
