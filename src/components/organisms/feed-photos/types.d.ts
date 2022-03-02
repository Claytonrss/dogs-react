import { PhotoProps } from 'types';

interface FeedPhotosProps {
  userID?: string;
  page: number;
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoProps | null>>;
  setInfinite: React.Dispatch<React.SetStateAction<boolean>>;
}
