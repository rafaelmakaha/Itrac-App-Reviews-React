import React, { useEffect, useState } from 'react';
import { getClusters } from '../../services/Clusters';

import { 
  Container,
  Button,
  Title, 
  List,
  Content,
  Text,
} from './style';
import LoadingFullScreen from '../../components/LoadingFullScreen';

const Home = () => {
  const [clusters,setClusters] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState({values: {}});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    requestClusters();

  },[]);

  const requestClusters = (cluster = '') => {
    setIsLoading(true);
    getClusters(cluster)
    .then(res => {
      // Same as an IF statement
      // const fnSetState = cluster ? setSelectedCluster : setClusters;
      // fnSetState(res.data)
      if (cluster){
        setSelectedCluster({cluster, values: res.data});
      }else{
        setClusters(res.data);
      }
      setIsLoading(false);
    })
  }

  return (
    <>
      <LoadingFullScreen status={isLoading} />
      <Container>
        <List>
          {
            clusters.map((cluster,index) => (
              <Button 
                key={index} 
                onClick={() => requestClusters(String(index))}>
                  Cluster {index}
              </Button>
            ))
          }
        </List>
        <Content>
          {
            !!selectedCluster.cluster && <Title>Cluster {selectedCluster.cluster}</Title>
          }
          {
            Object.entries(selectedCluster.values).map(([key, value],index) => {
              console.log(key,value)
              return (
                <React.Fragment key={key}>
                  <Text>Mensagem {index}</Text>
                  <Text>{value.text}</Text>
                  <Text>Score: {value.score}</Text>
                  <br></br>
                </React.Fragment>
              )
            })
          }
        </Content>
      </Container>
    </>
  );
}

export default Home;
