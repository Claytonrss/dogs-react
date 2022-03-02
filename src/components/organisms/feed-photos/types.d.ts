import { PhotoProps } from 'types';

interface FeedPhotosProps {
  userID?: number;
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoProps | null>>;
}
