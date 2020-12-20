import {useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import {loader} from 'graphql.macro'

//Queries
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql')

export default function useCustomer() {
    const [addUser, {data}] = useMutation(mutationCreateAccount)
    const [values, setValues] = useState({
        account: {
            name: '',
            username: '',
            password: ''
        }
    });

    const handleChange = (event) => {
        event.persist();
        setValues((prevState) => ({
            ...prevState,
            account: {
                ...prevState.account,
                [event.target.name]: event.target.value
            }
        }))
    }

    const save = () => {
        const {account} = values
        addUser({
            variables: {
                account
            }
        })
    }

    return {
        handleChange,
        save,
        createAccount: data && data.createAccount
    }


}