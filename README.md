## AniJourney - Frontend

O AniJourney é um site voltado para os amantes de animes, sendo possível explorar sua jornada pelo mundo dos animes. O site foi desenvolvido utilizando a API [AniJourney - Backend](https://github.com/pedrohenrique-ql/ani-journey).

## Requisitos

- [Node.js v20.11.0](https://nodejs.org/en/download/)
- [pnpm v9.12.1](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Desenvolvimento

1. Configure o repositório do [AniJourney - Backend](https://github.com/pedrohenrique-ql/ani-journey):

   ```bash
   .
   ├── ani-journey
   └── ani-journey-frontend
   ```

2. Clone o repositório:

   ```bash
   git clone git@github.com:pedrohenrique-ql/ani-journey-frontend.git
   cd ani-journey
   ```

3. Instale as dependências:

   ```bash
    pnpm install
   ```

4. Inicialize o backend:

   ```bash
   pnpm deps:up
   ```

5. Inicialize o frontend em outro terminal:

   ```bash
   pnpm dev
   ```
