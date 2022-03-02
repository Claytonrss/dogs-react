import FeedModal from '@/components/organisms/feed-modal';
import FeedPhotos from '@/components/organisms/feed-photos';
import React, { useEffect, useState } from 'react';
import { PhotoProps } from 'types';

const Feed: React.FC<FeedProps> = ({ userID }) => {
  const [modalPhoto, setModalPhoto] = useState<PhotoProps | null>(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;

        if ((scroll === height || scroll > height * 0.75) && !wait) {
          wait = true;
          setPages(pages => [...pages, pages.length + 1]);
          setTimeout(() => (wait = false), 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map(page => (
        <FeedPhotos
          key={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
          userID={userID}
          page={page}
        />
      ))}
    </div>
  );
};

export default Feed;
