import React from 'react';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { useQuery, useApolloClient } from '@apollo/client';
import { Link } from 'react-router-dom';
import { historyQuery } from 'gql/queries/historyQuery.graphql';
import { History as HistoryGQL } from 'gql/types';
import { H1, Text, HelpText } from 'uikit';
import { Skeleton } from './components/Skeleton';
import {
  Container,
  Header,
  Content,
  Item
} from './styled';

export const History = (): JSX.Element => {
  const { data, loading } = useQuery<HistoryGQL, null>(historyQuery);
  const client = useApolloClient();

  React.useEffect(() => {
    client.refetchQueries({
      include: ['History']
    });
  }, [client]);

  return (
    <Container>
      <Header>
        <H1>История</H1>
      </Header>
      <Content>
        {data?.history?.length === 0 && (
          <HelpText style={{ textAlign: 'center'}}>Нет записей</HelpText>
        )}
        {loading && (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
        {!loading && data?.history?.map(item => {
          const dateString = format(new Date(item.createdAt), 'dd MMM yyy, HH:mm', { locale: ruLocale });

          return (
            <Item key={item.id}>
              <Link to={item.link} style={{ textDecoration: 'none'}}>
                <Text style={{ marginBottom: '8px'}}>{item.message}</Text>
              </Link>
              <HelpText>{dateString}</HelpText>
            </Item>
          );
        })}
      </Content>
    </Container>
  );
};
