import React, { useEffect, useState } from 'react';
import { Container, GraphItem, TotalAccess } from './styles';
import { VictoryChart, VictoryPie, VictoryBar } from 'victory';

const UserStatsGraphs: React.FC<DataStatsProps> = ({ data }) => {
  const [graph, setGraph] = useState<{ x: string; y: number }[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map(item => ({
      x: item.title,
      y: item.acessos,
    }));
    setGraph(graphData);
    function getTotalAccess() {
      const access = data.map(({ acessos }) => +acessos);
      const totalAccess = access.reduce((a, b) => a + b, 0);
      return totalAccess;
    }
    setTotal(getTotalAccess());
  }, []);

  return (
    <Container className="animeLeft">
      <TotalAccess>Total de acessos: {total}</TotalAccess>
      <GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: '#FFF', strokeWidth: 2 },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </GraphItem>
      <GraphItem>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start" />
        </VictoryChart>
      </GraphItem>
    </Container>
  );
};

export default UserStatsGraphs;
