import "./Chat.css";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";     // highlights code syntax (like coloring JavaScript, Python, etc.)   dark.css-  adds a dark theme to code blocks

// react-markdown -  to proper formatting of information on chat (reply)
// rehype-highlight - to highlight our syntax

function Chat () {
    const {newChat, prevChats, reply} = useContext(MyContext);
    const [latestReply, setLatestReply] = useState(null);

    useEffect(() => {
        // seperate latest reply - and create typing effect of assistant

        if(reply === null) {
            setLatestReply(null);
            return;      //   previous chat load
        }

        if(!prevChats?.length) return;

        const content = reply.split(" ");   // print individual words 
        let idx = 0;
        const interval = setInterval(() => {
            setLatestReply(content.slice(0, idx+1).join(" "));

            idx++;
            if(idx >= content.length) clearInterval(interval);
        }, 40);   // each word will print after 40milisecon

        return () => clearInterval(interval);

    }, [prevChats,reply])

    return (
        <>
          {newChat && <h1>Start a New Chat!</h1>}
          <div className="chats">
            {
                prevChats?.slice(0, -1).map((chat,idx) => 
                    <div className={chat.role === "user"? "userDiv" : "gptDiv"} key={idx}>
                    {
                        chat.role === "user"?
                        <p className="userMessage">{chat.content}</p> :
                       <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
                    }
                    </div>
                )
            }

            {
                prevChats.length > 0 && (
                    <>
                       {
                         latestReply === null ? (
                           <div className="gptDiv" key={"non-typing"}>
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{prevChats[prevChats.length-1].content}</ReactMarkdown>
                           </div>
                         ) : (
                             <div className="gptDiv" key={"typing"}>
                              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{latestReply}</ReactMarkdown>
                             </div>
                         )
                        }
                    </>
                )

            }
          </div>
        </>
    )
}

export default Chat;