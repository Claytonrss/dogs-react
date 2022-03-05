import { CommentProps } from '@/types/index';

interface PhotoCommentsFormProps {
  id: string;
  setComments: React.Dispatch<React.SetStateAction<CommentProps[]>>;
}
