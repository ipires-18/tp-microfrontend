import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className='text-3xl font-bold underline bg-red-500 text-blue-500'>
        404 - Página não encontrada
      </h1>
      <p>A página que você procura não existe.</p>
      <Link to='/'>Voltar para a Home</Link>
    </div>
  );
};

export default NotFound;
