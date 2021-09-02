interface Post {
  title: string;
  thought: string;
}

export const postsArray: Post[] = [  {
    title: "Tricks or Treats?",
    thought: "We need to bring back the tricks! Too many treats."
  },
  {
    title: "Candy Corn Fan Post",
    thought: "I could eat it year-round.",
  }, 
  {
     title: "To my neighbor: You're not a vampire...", 
     thought: "You can't see your reflection because that's not a mirror. It's a window. #ISeeYou "
  }
]

// export interface PostProps {
//   posts: Array<Post>;
// }

// export const postsArray = [
//   {
//     title: "React?",
//     thought: "Not loving it"
//   },
//   {
//     title: "Cats?",
//     thought: "Still love em",
//   },
// ];

// export const postsArr: PostProps[] = [
//     {posts: posts}
// ]

export default Post;
