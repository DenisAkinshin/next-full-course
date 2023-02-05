import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import style from '../../styles/user.module.scss'

export default function User({user}) {


    return (
        <MainContainer>
            <div className={style.user}>
                <h1 className={style.user__title}>{user.id}.  {user.name} {user.email}</h1>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user =  await response.json()

    return {
      props: {user}, // will be passed to the page component as props
    }
  }