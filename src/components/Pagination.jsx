const Pagination = ({ paginaAtual, totalPaginas, aoMudarPagina }) => {
  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <button
        onClick={() => aoMudarPagina(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        className="bg-sky-500 hover:bg-sky-600 rounded-md px-4 py-2 font-bold transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed"
      >
        Anterior
      </button>
      <span className="text-lg">
        Página {paginaAtual} de {totalPaginas}
      </span>
      <button
        onClick={() => aoMudarPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        className="bg-sky-500 hover:bg-sky-600 rounded-md px-4 py-2 font-bold transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed"
      >
        Próxima
      </button>
    </div>
  );
};

export default Pagination;