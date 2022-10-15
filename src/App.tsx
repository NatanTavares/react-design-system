export const App: React.FC = () => {
  return (
    <>
      <h1 className='font-bold text-2xl text-black'>Hello World</h1>

      <button
        type='button'
        className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300 capitalize'
      >
        enviar
      </button>
    </>
  );
};
