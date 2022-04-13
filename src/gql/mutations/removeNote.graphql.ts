import {gql} from '@apollo/client';

export const removeNoteMutation = gql`
  mutation RemoveNote($id: Int!) {
    removeNote(id: $id)
  }
`;
