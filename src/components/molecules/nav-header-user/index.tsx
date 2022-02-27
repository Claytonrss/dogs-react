import { ReactComponent as AddPhotoIcon } from '@/assets/images/adicionar.svg';
import { ReactComponent as StatsIcon } from '@/assets/images/estatisticas.svg';
import { ReactComponent as FeedIcon } from '@/assets/images/feed.svg';
import { ReactComponent as LogoutIcon } from '@/assets/images/sair.svg';
import { UserContext } from '@/context/UserContext';
import useMedia from '@/hooks/useMedia';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, MobileButton } from './styles';

const NavHeaderUser: React.FC = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width:40rem)');
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <MobileButton
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
          aria-label="Menu mobile"
          className={mobileMenuActive ? 'active' : ''}
        />
      )}
      <Container
        className={
          (mobile ? 'nav-mobile' : '') +
          (mobileMenuActive ? ' nav-mobile-active' : '')
        }
      >
        <NavLink to="/conta" end>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <StatsIcon />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddPhotoIcon />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={userLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </Container>
    </>
  );
};

export default NavHeaderUser;
