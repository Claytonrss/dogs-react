import FeedModal from '@/components/organisms/feed-modal';
import FeedPhotos from '@/components/organisms/feed-photos';
import React, { useState } from 'react';
import { PhotoProps } from 'types';

const Feed: React.FC<FeedProps> = ({ userID }) => {
  const [modalPhoto, setModalPhoto] = useState<PhotoProps | null>(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} userID={userID} />
    </div>
  );
};

export default Feed;
