import { CommentProps } from '@/types/index';

interface PhotoCommentsFormProps {
  id: number;
  setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
}
