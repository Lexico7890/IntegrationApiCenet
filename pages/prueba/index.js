import Link from "next/link";
import AppLayout from "../../components/AppLayout";

export default function Prueba({userName}) {
  return (
    <>
      <AppLayout>
        <h3>Pagina de prueba</h3>
        <Link href="/">
          <a>Go home {userName}</a>
        </Link>
      </AppLayout>
    </>
  );
}

Prueba.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    /*.then(response => {
      console.log(response)
      const{userName} = response
      return{userName}
    })*/
}
