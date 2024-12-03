import { useState } from 'react';
import PhotoBlogTab from './PhotoBlogTab';
import VideoBlogTab from './VideoBlogTab';
import CommentForm from './CommentForm';
import './Blog.css';

type Tab = 'photoBlog' | 'videoBlog';

function Blog(): JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>('photoBlog');
  const [comments, setComments] = useState<string[]>([]); // State to store comments

  const handleCommentSubmit = (newComment: string) => {
    setComments([...comments, newComment]); // Add new comment to the state
  };

  return (
    <div className="Blog">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'photoBlog' ? 'active' : ''}`}
          onClick={() => setActiveTab('photoBlog')}
        >
          Photo Blog
        </button>
        <button
          className={`tab-button ${activeTab === 'videoBlog' ? 'active' : ''}`}
          onClick={() => setActiveTab('videoBlog')}
        >
          Video Blog
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'photoBlog' && <PhotoBlogTab />}
        {activeTab === 'videoBlog' && <VideoBlogTab />}
      </div>

      <div className="comment-section">
        <h3>Leave a Comment</h3>
        <CommentForm onSubmit={handleCommentSubmit} />
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

