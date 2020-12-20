// Core
import {useQuery} from '@apollo/react-hooks'
import {loader} from 'graphql.macro'

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePet.graphql');

export default function useQueryAvailablePets() {
    return useQuery(queryAvailablePets)
}