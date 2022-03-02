import { PhotoProps } from 'types';

interface PhotoContentProps {
  data: PhotoContentItem;
  isSingle?: boolean;
}

interface PhotoContentItem {
  photo: PhotoProps;
  comments: [];
}
