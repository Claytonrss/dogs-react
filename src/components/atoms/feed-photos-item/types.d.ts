import { PhotoProps } from 'types';

interface FeedPhotoItemProps {
  photo: PhotoProps;
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoProps | undefined>>;
}
