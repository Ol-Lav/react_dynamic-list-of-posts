import { request } from './api';
import { Comment } from '../types/Comment';

export const getPostComments = (postId: number): Promise<Comment[]> => {
  return request(`/comments?postId=${postId}`);
};

export const deleteComment = (commentId: number) => {
  return request(`/comments/${commentId}`, { method: 'DELETE' });
};

export const addComment = (newComment: Comment) => {
  return request('/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newComment),
  });
};
