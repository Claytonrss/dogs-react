import { UserContext } from '@/context/UserContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import PhotoCommentsForm from '../photo-comments-form';
import { CommentItem, CommentList } from './styles';
import { PhotoCommentsProps } from './types';

const PhotoComments: React.FC<PhotoCommentsProps> = props => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  const commentsSection = useRef<HTMLUListElement>(null);

  useEffect(() => {
    commentsSection!.current!.scrollTop =
      commentsSection?.current?.scrollHeight || 0;
  }, [comments]);

  return (
    <>
      <CommentList ref={commentsSection} className={!login ? 'not-logged' : ''}>
        {comments.map(comment => (
          <CommentItem key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </CommentItem>
        ))}
      </CommentList>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
