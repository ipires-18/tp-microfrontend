# Template Microfrontend

Este repositório contém o código-fonte e os recursos necessários para o microfrontend com module federation.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

├── **husky**                     # Configuração do Husky para hooks do Git (ex: pre-commit, pre-push).
├── **jest**                      # Configuração e arquivos relacionados ao Jest para testes unitários.
├── **config**                    # Arquivos de configuração do projeto (ex: ambiente, constantes globais).
├── **node_modules**              # Dependências do projeto instaladas via npm/yarn.
├── **public**                    # Arquivos estáticos servidos diretamente (ex: index.html, favicon.ico).
├── **src**                       # Código-fonte principal do projeto.
│   ├── **app**                   # Configurações e componentes principais da aplicação.
│   ├── **assets**                # Recursos estáticos (imagens, ícones, fonts, etc.).
│   ├── **components**            # Componentes reutilizáveis da UI.
│   ├── **config**                # Configurações específicas da aplicação (ex: temas, rotas).
│   ├── **features**              # Funcionalidades da aplicação organizadas por domínio.
│   ├── **hooks**                 # Hooks customizados do React.
│   ├── **routes**                # Configuração de rotas da aplicação (ex: React Router).
│   ├── **stores**                # Gerenciamento de estado global (ex: Redux, Zustand).
│   ├── **styles**                # Estilos globais e temáticos (ex: CSS, SCSS, Styled Components).
│   ├── **types**                 # Tipos TypeScript globais ou interfaces.
│   ├── **utils**                 # Funções utilitárias e helpers reutilizáveis.
├── **tests**                     # Testes da aplicação.
│   ├── **mocks**                 # Mocks para testes (ex: APIs, módulos).
│   ├── **app**                   # Testes relacionados à aplicação principal.
├── **.editorconfig**             # Configuração de estilo de código para editores.
├── **.gitignore**                # Arquivos e pastas ignorados pelo Git.
├── **.lintstagedrc.js**          # Configuração do lint-staged para linting em arquivos staged.
├── **babel.config.js**           # Configuração do Babel para transpilação de código.
├── **biome.json**                # Configuração do Biome para formatação e linting.
├── **commitlint.config.js**      # Configuração do Commitlint para mensagens de commit padronizadas.
├── **jest.config.js**            # Configuração do Jest para execução de testes.
├── **package.json**              # Metadados do projeto e lista de dependências.
├── **README.md**                 # Documentação principal do projeto.
├── **rsbuild.config.ts**         # Configuração do Rsbuild para build e desenvolvimento.
└── **yarn.lock**                 # Versões exatas das dependências instaladas pelo Yarn.


## Configuração do Ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/workpass-orchestrator-microfront.git

2. **Instale as dependências:**:
   ```bash
   yarn

3. **Execute os testes:**:
   ```bash
   yarn test

4. **Inicie o servidor de desenvolvimento:**:
   ```bash
   yarn start

## Funcionalidade como Host para Microfrontends

Este projeto atua como um host para consumir e integrar outros microfrontends. A arquitetura de microfrontends permite que diferentes partes da aplicação sejam desenvolvidas, testadas e implantadas de forma independente. Aqui está como este projeto facilita essa integração:

1. Integração de Microfrontends: O projeto é configurado para carregar e exibir microfrontends de diferentes equipes ou repositórios. Isso é feito através de configurações específicas no rsbuild.config.ts e no src/config.

2. Roteamento e Gerenciamento de Estado: O roteamento e o gerenciamento de estado são centralizados no host, permitindo que os microfrontends se comuniquem e compartilhem dados de forma eficiente.

3. Desenvolvimento Independente: Cada microfrontend pode ser desenvolvido e testado de forma independente, e o host se encarrega de integrá-los em um único ambiente de execução.

## Incluindo Novos Remotes

Para incluir novos microfrontends como remotes, você deve editar o arquivo config-plugin-module-federation.ts localizado na pasta config. Neste arquivo, você precisa adicionar o nome do microfrontend e a URL correspondente. Aqui está um exemplo de como fazer isso:

- **config/config-plugin-module-federation.ts:**:
  ```javascript
  export const configFederation = {
    other-files...,
    remotes: {
      workpass_mf_client: {
        external: 'workpass_mf_client@http://localhost:2000/mf-manifest.json',
      },
    },
    other-files...,
  };

Substitua ou insira o 'nome-do-seu-mf' como chave no objeto sempre coloque o nome do seu microfrontend após isso coloque a sua URL 'https://url-do-seu-mf' é onde o microfrontend está hospedado no momento. Após adicionar o novo remote, o host será capaz de carregar e integrar o microfrontend automaticamente.

## Padronização de Commits

Para garantir que as mensagens de commit sigam um padrão convencional, utilizamos as seguintes ferramentas:

- Commitlint: Configurado com @commitlint/config-conventional, esta ferramenta valida se as mensagens de commit seguem o formato convencional. Isso ajuda a manter um histórico de commits consistente e legível.

- Commitizen: Facilita a criação de commits seguindo o padrão convencional. Ao usar commitizen, você pode executar yarn commit para ser guiado através de um prompt interativo que ajuda a criar mensagens de commit no formato correto.

- **Exemplo de Uso do Commitizen:**:
   ```bash
   yarn commit

Isso abrirá um prompt interativo onde você poderá selecionar o tipo de commit, o escopo, uma descrição curta e uma descrição longa (se necessário).

## Exemplo de Mensagem de Commit Convencional

Uma mensagem de commit no formato convencional pode ser algo como:

feat: adiciona nova funcionalidade de login || feat(login): adiciona nova funcionalidade de login

Adiciona a funcionalidade de login utilizando autenticação OAuth2.

Para mais informações consultar:
[Conventional Commits (pt-BR)]: https://www.conventionalcommits.org/pt-br/v1.0.0/



