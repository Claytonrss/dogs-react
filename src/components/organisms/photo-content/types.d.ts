import { PhotoProps } from 'types';

interface PhotoContentProps {
  data: PhotoContentItem;
}

interface PhotoContentItem {
  photo: PhotoProps;
  comments: [];
}
