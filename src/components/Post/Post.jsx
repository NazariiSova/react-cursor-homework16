import "./Post.css";

const Post = ({
  author,
  content,
  date,
  image,
  nickname,
  comments,
  reposts,
  likes,
  downloads,
}) => {
  console.log(author.photo);
  return (
    <div className="container">
        
      <div className="post">

        <div className="post-header">
          <img className="author-photo" src={author.photo} alt="authot photo" />
          <div className="author-name">{author.name}</div>
          <img className="post-header-icon" src="./img/origіn-32.png" />
          <div className="post-header-nickname">{author.nickname}</div>
          <div className="post-header-date">{date}</div>
        </div>

        <div className="post-body">
          <div className="content-text">{content}</div>
          <img className="content-img" src={image} alt="content image" />
        </div>

        <div className="post-footer">
          <ul className="post-footer-ul">
            <li className="post-footer-li">
              {" "}
              <img
                className="post-footer-icon"
                src="./img/comments-50.png"
                alt=""
              />{" "}
              {comments}
            </li>
            <li className="post-footer-li">
              {" "}
              <img
                className="post-footer-icon"
                src="./img/repeat-50.png"
                alt=""
              />{" "}
              {reposts}
            </li>
            <li className="post-footer-li">
              {" "}
              <img
                className="post-footer-icon"
                src="./img/heart-50.png"
                alt=""
              />{" "}
              {likes}
            </li>
            <li className="post-footer-li">
              {" "}
              <img
                className="post-footer-icon"
                src="./img/download-50.png"
                alt=""
              />{" "}
              {downloads}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
