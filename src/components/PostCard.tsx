import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    description: string;
    author: {
      authorName: string;
      authorImage: string;
      authorRole: string;
    };
    date: string;
    readTime: string;
    category: string;
    image: string;
    tags: string[];
    likes: number;
    comments: number;
  };
}

const PostCard = ({post}: PostCardProps) => {
  const {
    title,
    description,
    author,
    date,
    readTime,
    category,
    image,
    tags,
  } = post;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link to={`/blog/${post.id}`}>
    <div className="post-card">
      <div className="image-container">
        <img src={image} alt={title} className="post-image" />
        <div className="category-tag">
          <FaTag size={10} />
          <span>{category}</span>
        </div>
      </div>

      <div className="card-content">
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>

        <div className="author-container">
          <div className="author-image">
            <img src={author.authorImage} alt={author.authorName} />
          </div>
          <div className="author-info">
            <span className="author-name">{author.authorName}</span>
            <span className="author-role">{author.authorRole}</span>
          </div>
        </div>

        <div className="post-footer">
          <div className="post-meta">
            <span>
              {formatDate(date)} · {readTime}
            </span>
          </div>
        </div>
        
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
