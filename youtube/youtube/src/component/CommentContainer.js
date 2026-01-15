import React, { useState } from "react";

const commentsData = [
  {
    id: "c1",
    name: "Vikas Kumar",
    text: "You cleared my doubt 👍",
    replies: [
      {
        id: "r1",
        name: "Aman",
        text: "Same here, very helpful!",
      },
      {
        id: "r2",
        name: "Raj",
        text: "Thanks for explaining clearly.",
      },
    ],
  },
  {
    id: "c2",
    name: "Aman",
    text: "I want to play cricket 🏏",
    replies: [
      {
        id: "r3",
        name: "Samrat Singh",
        text: "Let’s make a team!",
      },
    ],
  },
  {
    id: "c3",
    name: "Raj",
    text: "You are awesome sir 🔥",
    replies: [
      {
        id: "r4",
        name: "Punit",
        text: "Absolutely agree!",
      },
    ],
  },
  {
    id: "c4",
    name: "Punit",
    text: "Thanks a lot for this video 🙌",
    replies: [],
  },
  {
    id: "c5",
    name: "Kaju",
    text: "What a nice video 😍",
    replies: [
      {
        id: "r5",
        name: "Kali",
        text: "Yes, very informative.",
      },
    ],
  },
  {
    id: "c6",
    name: "Samrat Singh",
    text: "Nice video 👍",
    replies: [],
  },
  {
    id: "c7",
    name: "Kali",
    text: "Good video, keep it up 💪",
    replies: [
      {
        id: "r6",
        name: "Aman",
        text: "Support from my side too!",
      },
    ],
  },
  {
    id: "c8",
    name: "Neha",
    text: "Loved the explanation ❤️",
    replies: [],
  },
  {
    id: "c9",
    name: "Rohit",
    text: "Very useful content",
    replies: [
      {
        id: "r7",
        name: "Vikas Kumar",
        text: "Glad it helped 😊",
      },
    ],
  },
  {
    id: "c10",
    name: "Anjali",
    text: "Please make more videos like this",
    replies: [],
  },
  {
    id: "c11",
    name: "Suresh",
    text: "This cleared my confusion",
    replies: [],
  },
  {
    id: "c12",
    name: "Deepak",
    text: "Amazing teaching style 👌",
    replies: [
      {
        id: "r8",
        name: "Raj",
        text: "True, very easy to understand.",
      },
    ],
  },
  {
    id: "c13",
    name: "Kunal",
    text: "Watched till the end 😄",
    replies: [],
  },
  {
    id: "c14",
    name: "Manish",
    text: "Best explanation on this topic",
    replies: [],
  },
  {
    id: "c15",
    name: "Ritika",
    text: "Thanks for sharing knowledge",
    replies: [],
  },
  {
    id: "c16",
    name: "Arjun",
    text: "Very helpful for beginners",
    replies: [],
  },
  {
    id: "c17",
    name: "Nitin",
    text: "Simple and clear explanation",
    replies: [
      {
        id: "r9",
        name: "Punit",
        text: "Yes, totally beginner friendly.",
      },
    ],
  },
  {
    id: "c18",
    name: "Sonal",
    text: "Loved it 💖",
    replies: [],
  },
  {
    id: "c19",
    name: "Harsh",
    text: "Keep uploading such videos",
    replies: [],
  },
  {
    id: "c20",
    name: "Priya",
    text: "Subscribed after watching this 👍",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies, id } = data;
   const [showReplies, setShowReplies] = useState(false)
  return (
    <div className="flex gap-3 my-3">
      <img
        alt="user"
        className="w-10 h-10 rounded-full"
        src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />

      <div className="flex-1">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-sm">{text}</p>

        {/* Toggle replies button */}
        {replies?.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="text-blue-600 text-xs mt-1 hover:underline"
          >
            {showReplies
              ? "Hide replies"
              : `View replies (${replies.length})`}
          </button>
        )}

        {/* Replies */}
        {showReplies && replies?.length > 0 && (
          <div className="ml-5 mt-2 border-l border-gray-300 pl-4">
            <CommentList comments={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const CommentList = ({comments})=> {
  return(
   <>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </>
  )
}

const CommentContainer = () => {
  return (
    <div className="ml-2 p-3">
      <h1 className="text-2xl font-bold mb-1">Comment</h1>
     <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;



