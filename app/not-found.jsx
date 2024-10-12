import Link from 'next/link';


export default function Custom404() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - Página no encontrada</h1>
        <p>Parece que la página que buscas no existe. 😢</p>
        <Link href="/" >Inico</Link>
      </div>
    );
  }
  