import { PhotoProps } from 'types';

interface FeedModalProps {
  photo: PhotoProps;
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoProps | null>>;
}
