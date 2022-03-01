export interface DataCyProps {
  dataCypress?: string;
}

export interface PhotoProps {
  acessos: string;
  author: string;
  date: string;
  id: number;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
}

export interface CommentProps {
  comment_ID: number;
  comment_author: string;
  comment_content: string;
}
