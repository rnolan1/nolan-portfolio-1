import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment); // Submit the comment to the parent component
      setComment(''); // Reset the comment input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="A penny for your thoughts? Share them here..."
        rows={4}
        className="comment-input"
      />
      <button type="submit" className="submit-comment-button">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
