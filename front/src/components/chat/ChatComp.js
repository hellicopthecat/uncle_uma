import {useEffect, useRef, useState} from "react";
import {io} from "socket.io-client";
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";
export default function ChatComp() {
  const auth = getAuth();
  const navigate = useNavigate();
  const currentUser = auth.currentUser;
  const createRoom = useRef(null);
  const chatRoom = useRef(null);
  const [socket, setSocket] = useState();
  const [isLoading, setLoading] = useState(false);
  const [room, set_room] = useState();
  const [chat, set_chat] = useState("");
  const [chatText, setChatText] = useState([]);
  const [preMsg, set_preMsg] = useState([]);

  const goToRoom = () => {
    createRoom.current.hidden = true;
    chatRoom.current.hidden = false;
  };

  const roomCreate = () => {
    socket.emit("RoomCreate", room, goToRoom);
  };

  const disConnect = () => {
    socket.disconnect();
    navigate("/chat");
  };

  const sendMsg = () => {
    const msgObj = {
      sender: currentUser.email,
      contents: chat,
    };

    socket.timeout(5000).emit("SendMsg", msgObj, room, () => {
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!socket) {
      setSocket(io(`http://localhost:3003`));
    }
    if (socket) {
      const handleWelcome = () => {
        set_preMsg((msg) => [...msg, `${`00`}님이 대화방에 들어왔습니다.`]);
      };
      const handleSendMsg = (val) => {
        setChatText((prevMsg) => [...prevMsg, val]);
      };
      const handleBye = () => {
        set_preMsg((msg) => [...msg, `${`00`}님이 대화방을 나갔습니다.`]);
      };

      socket.on("welcome", handleWelcome);
      socket.on("SendMsg", handleSendMsg);
      socket.on("bye", handleBye);

      return () => {
        socket.off("welcome", handleWelcome);
        socket.off("SendMsg", handleSendMsg);
        socket.off("bye", handleBye);
      };
    }
    chatRoom.current.hidden = true;
  }, [room, chat]);

  return (
    <div className="py-20 h-[60vh]">
      <div
        ref={createRoom}
        className="container mx-auto bg-white p-10 my-20 rounded-md "
      >
        <form
          className="flex justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            roomCreate();
          }}
        >
          <fieldset>
            <legend className="hidden">채팅</legend>
            <label htmlFor="message" className="mr-5">
              방 만들기
            </label>
            <input
              id="message"
              type="text"
              name="message"
              placeholder="방제목을 입력하세요"
              className="border border-blue-100 px-4 mr-5 rounded-xl"
              onChange={(e) => set_room(e.target.value)}
            />
            <button type="submit">만들기</button>
          </fieldset>
        </form>
      </div>
      <div
        ref={chatRoom}
        className="container mx-auto bg-white p-10 rounded-md"
      >
        <div className="flex items-center">
          <span className="bg-blue-300 w-3 h-6 mr-3 "></span>
          <h3 className="text-2xl font-semibold">방제목 : {room}</h3>
        </div>
        <ul className="m-20">
          {preMsg.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
          {chatText.map((text, i) => (
            <li
              key={i}
              className={`${
                currentUser.email !== text.sender
                  ? "text-left bg-orange-100"
                  : "text-right bg-blue-100"
              }`}
            >
              {text.sender} : {text.contents}
            </li>
          ))}
        </ul>
        <form
          className="flex justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            sendMsg();
          }}
        >
          <fieldset>
            <legend className="hidden">채팅</legend>
            <label htmlFor="message" className="mr-5">
              내용
            </label>
            <input
              id="message"
              type="text"
              name="message"
              placeholder="메세지를 입력하세요"
              className="border border-blue-100 px-4 mr-5 rounded-xl"
              onChange={(e) => {
                set_chat(e.target.value);
              }}
            />
            <button type="submit" disabled={isLoading}>
              보내기
            </button>
          </fieldset>
        </form>
        <div className="flex justify-center ">
          <button
            type="button"
            onClick={() => {
              disConnect();
            }}
            className="border border-blue-100 px-2 py-1 my-5 rounded-xl"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
