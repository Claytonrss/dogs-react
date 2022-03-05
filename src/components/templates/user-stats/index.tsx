import { STATS_GET } from '@/api/index';
import Error from '@/components/atoms/error';
import Head from '@/components/atoms/head';
import Loading from '@/components/atoms/loading';
import useFetch from '@/hooks/useFetch';
import React, { useEffect } from 'react';

const UserStatsGraphs = React.lazy(
  () => import('@/components/organisms/user-stats-graphs')
);

const UserStats: React.FC = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token') || '';
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
