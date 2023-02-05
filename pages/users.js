import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {


    return (
        <MainContainer>
            <h1>Старница с пользователями</h1>
            <ul>
                {users.map(item =>
                 <li key={item.id}>
                    <Link href={`/users/${item.id}`}>
                        {item.id} {item.name}
                    </Link>
                </li>   
                )}
            </ul>
        </MainContainer>
    )
}

export default Users;

export async function getStaticProps(context) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users =  await response.json()

    return {
      props: {users}
    }
  }