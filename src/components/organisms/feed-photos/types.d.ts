import { PhotoProps } from 'types';

interface FeedPhotosProps {
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoProps | null>>;
}
