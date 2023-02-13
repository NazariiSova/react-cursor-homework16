import Post from "./components/Post/Post";


const posts = [{
  author: {
    name: "R2D2",
    photo: "https://static.wikia.nocookie.net/rustarwars/images/1/1a/R2d2.jpg/revision/latest?cb=20120924084739",
    nickname: "@droid"
  },
  content: "how to change a wheel?",
  image: "http://www.artoo-detoo.net/gallery/d/11248-2/IMG_3973.JPG",
  date: "23 трав",
  comments: "21",
  reposts: "2",
  likes: "45",
  downloads: "1"
},
{
  author: {
    name: "Jar Jar Binks",
    photo: "https://upload.wikimedia.org/wikipedia/en/4/4b/Jjportrait.jpg",
    nickname: "@Gungan"
  },
  content: "the Jedi will come and restore order",
  image: "https://uway.com.ua/wp-content/uploads/2017/10/kodeks-dzhedaiv.jpg",
  date: "3 вер",
  comments: "23451",
  reposts: "2232",
  likes: "444325",
  downloads: "435"
},

{
  author: {
    name: "Anakin skywalker",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickname: "@dart_vader"
  },
  content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
  date: "23 лют",
  comments: "428",
  reposts: "146",
  likes: "887",
  downloads: ""
}
];





function App() {


  return (

    <div className="App">
      {posts.map((post) => (
        <Post
          author={post.author}
          content={post.content}
          image={post.image}
          date={post.date}
          comments={post.comments}
          reposts={post.reposts}
          likes={post.likes}
          downloads={post.downloads}
          key={post.author.name}
        />
      ))}

  
  
    </div>
  );
}


export default App;