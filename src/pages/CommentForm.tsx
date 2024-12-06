import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment); 
      setComment(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      {/* Placeholder Text */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="A penny for your thoughts? Share them here..."
        rows={4}
        className="comment-input"
      />
      {/* Submit Comment Button */}
      <button type="submit" className="submit-comment-button">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
