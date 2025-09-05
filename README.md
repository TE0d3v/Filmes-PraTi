# 🎬 Cine Explorer: Uma Interface de Filmes com React

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Licença](https://img.shields.io/badge/Licença-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Resumo do Projeto:**
> Cine Explorer é uma aplicação web front-end desenvolvida para permitir que usuários descubram, pesquisem e salvem seus filmes favoritos. Construída com React, a aplicação consome a API do OMDb para fornecer dados em tempo real e utiliza o `localStorage` para persistir a lista de favoritos, oferecendo uma experiência de usuário fluida e interativa.

![placeholder](https://via.placeholder.com/800x450.png?text=Screenshot+da+Página+Inicial+do+Cine+Explorer)

## ✨ Funcionalidades Principais

Este projeto implementa um conjunto completo de funcionalidades para uma aplicação de catálogo de filmes:

* **Navegação e Descoberta:**
    * **Página Inicial Dinâmica:** Uma vitrine com fileiras de filmes, simulando categorias como "Sugestões de Heróis", "Clássicos", etc., para incentivar a descoberta.
    * **Busca Global:** Um formulário de pesquisa persistente no cabeçalho que permite ao usuário buscar filmes de qualquer página da aplicação.
    * **Página de Resultados de Busca:** Uma rota dedicada (`/search`) que exibe os resultados da pesquisa em um grid.

* **Gerenciamento de Filmes:**
    * **Visualização de Detalhes:** Uma página de detalhes completa para cada filme, exibindo pôster, sinopse, elenco, diretor, avaliação e mais.
    * **Sistema de Favoritos:** Funcionalidade para adicionar ou remover filmes de uma lista pessoal de favoritos.
    * **Persistência de Dados:** A lista de favoritos é salva no `localStorage`, garantindo que as escolhas do usuário sejam mantidas entre as sessões.

* **Experiência do Usuário (UX):**
    * **Notificações (Toasts):** Feedback visual instantâneo ao adicionar ou remover um filme dos favoritos.
    * **Estados de Carregamento e Erro:** Indicadores visuais para o usuário durante as chamadas de API e mensagens de erro claras.
    * **Design Responsivo:** Interface totalmente adaptável para uma experiência consistente em desktops, tablets e celulares.

## 🚀 Tecnologias e Justificativas

A escolha das tecnologias foi focada em modernidade, performance e uma ótima experiência de desenvolvimento:

* **React (v18+):** Utilizado pela sua arquitetura baseada em componentes, ecossistema robusto e uso de Hooks para um gerenciamento de estado declarativo e eficiente.
* **Vite:** Escolhido como ferramenta de build por sua velocidade incomparável no servidor de desenvolvimento (usando HMR nativo) e build otimizado para produção.
* **Tailwind CSS:** Framework de estilização utility-first que permite a criação de interfaces complexas diretamente no HTML, agilizando o desenvolvimento e mantendo a consistência visual.
* **React Router DOM:** Biblioteca padrão para gerenciamento de rotas em aplicações React, permitindo a navegação entre páginas no lado do cliente (SPA).
* **Axios:** Cliente HTTP para realizar chamadas à API do OMDb de forma simples e estruturada.
* **React Hot Toast:** Biblioteca leve e personalizável para adicionar notificações "toast" não intrusivas.

## 🧠 Arquitetura e Conceitos Aplicados

O projeto foi estruturado para ser modular, escalável e de fácil manutenção.

* **Componentização:** A interface foi dividida em componentes reutilizáveis (`MovieCard`, `MovieRow`, `Header`, `Pagination`) e componentes de página (`HomePage`, `DetailsPage`).
* **Gerenciamento de Estado com Hooks:** O estado local dos componentes é gerenciado com `useState`, e os efeitos colaterais (como chamadas de API) são controlados com `useEffect`.
* **Hooks Customizados:** A lógica de favoritos foi abstraída para um hook customizado (`useFavorites`), centralizando o gerenciamento do estado e a interação com o `localStorage`. Isso limpa os componentes e torna a lógica reutilizável.
* **Serviços de API:** A configuração do Axios e a lógica de comunicação com a API foram isoladas em um módulo de serviço (`src/services/api.js`), separando as responsabilidades.

### `📂 Estrutura de Diretórios`
```
/meu-app-filmes
├── public/
├── src/
│   ├── components/   # Componentes reutilizáveis e de UI
│   ├── hooks/        # Hooks customizados (ex: useFavorites)
│   ├── pages/        # Componentes de "tela" (HomePage, etc.)
│   ├── services/     # Módulos de serviço (ex: api.js)
│   ├── App.jsx       # Componente raiz com as definições de rotas
│   ├── index.css     # Estilos globais e diretivas do Tailwind
│   └── main.jsx      # Ponto de entrada da aplicação
├── .env              # Arquivo para variáveis de ambiente (NÃO versionado)
├── package.json
└── README.md
```

## ⚙️ Guia de Instalação e Execução

Para configurar e rodar o projeto em seu ambiente local, siga estas etapas:

**1. Pré-requisitos:**
* Node.js (versão 16 ou superior)
* npm ou yarn

**2. Clone o Repositório:**
```bash
git clone [https://github.com/seu-usuario/meu-app-filmes.git](https://github.com/seu-usuario/meu-app-filmes.git)
cd meu-app-filmes
```

**3. Instale as Dependências:**
```bash
npm install
```

**4. Configure a Chave da API:**
Este projeto requer uma chave da API do **OMDb**.

* Crie um arquivo chamado `.env` na raiz do projeto.
* Adicione sua chave de API ao arquivo, conforme o exemplo abaixo:
    ```
    VITE_OMDB_API_KEY="SUA_CHAVE_AQUI"
    ```
    > **Importante:** O prefixo `VITE_` é obrigatório para que o Vite exponha a variável de ambiente para o código do front-end.

**5. Execute o Projeto:**
```bash
npm run dev
```
O servidor de desenvolvimento será iniciado, e a aplicação estará acessível em `http://localhost:5173`.

## 📈 Possíveis Melhorias Futuras

-   [ ] Implementar "debounce" no campo de busca do header para fornecer resultados em tempo real.
-   [ ] Adicionar "skeletons" de carregamento para uma melhor experiência visual durante o fetch de dados.
-   [ ] Migrar para TypeScript para adicionar tipagem estática e aumentar a robustez do código.
-   [ ] Criar um sistema de autenticação de usuários para que cada um tenha sua própria lista de favoritos.
-   [ ] Adicionar testes unitários e de integração com Vitest e React Testing Library.
-   [ ] Realizar o deploy da aplicação em uma plataforma como Vercel ou Netlify.

## 👨‍💻 Autor

**[Seu Nome Completo]**

* LinkedIn: [`https://linkedin.com/in/seu-usuario`](https://linkedin.com/in/seu-usuario)
* GitHub: [`@seu-usuario`](https://github.com/seu-usuario)

---
Este projeto foi desenvolvido como parte de um estudo prático de React e suas tecnologias associadas.