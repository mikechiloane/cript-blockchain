import criptnet from "../config/criptnet.ts";
import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";
import {api} from "../config/api.ts";
import {login} from "../redux/features/userSlice.ts";
import {setAddress} from "../redux/features/walletSlice.ts";

export  interface userInterface {
    email: string;
    name: string;

}

const useUser = () => {

    const {user, isAuthenticated} = useAuth0();
    const [userDetails, setUserDetails] = useState<userInterface>();
    const dispatch = useDispatch();
    const getUser = async () => {
        try {

            const response = await criptnet.get(api.user.getUser + user?.email);
            const data = response.data;
            dispatch(login({email: data.email, nickname: data.name}));
            dispatch(setAddress(data.address));
            setUserDetails(response.data);


        } catch (error) {
            const response = await criptnet.post(api.user.createUser, {
                    email: user?.email,
                    name: user?.nickname
                }
            );
            const data = response.data;
            dispatch(login({email: data.email, nickname: data.name}));
            setUserDetails(data);

        }
    }

    useEffect(
        () => {
            if (isAuthenticated) {
                getUser();
            }
        }, [user, isAuthenticated]);

    return userDetails;


}

export default useUser;