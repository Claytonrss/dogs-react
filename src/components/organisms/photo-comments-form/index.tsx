import React, { FormEvent, useState } from 'react';
import { Container } from './styles';
import { ReactComponent as SendSvg } from '@/assets/images/enviar.svg';
import useFetch from '@/hooks/useFetch';
import { COMMENT_POST } from '@/api/index';
import { PhotoCommentsFormProps } from './types';
import { CommentProps } from '@/types/index';
import Error from '@/components/atoms/error';
const PhotoCommentsForm: React.FC<PhotoCommentsFormProps> = ({
  id,
  setComments,
}) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const token = window.localStorage.getItem('token')!;
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response?.ok) {
      setComment('');
      setComments(
        (comments: CommentProps[]) => [...comments, json] as CommentProps[]
      );
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name="comment"
        id="comment"
        placeholder="Comente"
      />
      <button>
        <SendSvg />
      </button>
      <Error>{error}</Error>
    </Container>
  );
};

export default PhotoCommentsForm;
