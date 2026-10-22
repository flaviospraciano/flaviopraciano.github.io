# Português Banana

*Mapa interativo do Português de concursos*

Jogo de estudo de Língua Portuguesa com **1.800 questões** em três níveis de dificuldade: crase, porquês, concordância, regência, colocação pronominal, pontuação, acentuação e as pegadinhas mais comuns de prova.

**Criado por Flávio S. Praciano.**

## O que tem no jogo

- Menu inicial com o mapa das 5 regiões, 29 lições, aulas curtas e 7 chefões
- Revisão espaçada dos erros (1, 3 e 7 dias) e reforço automático quando você erra
- Clínica do erro, teste de proficiência adaptativo e simulado Certo ou Errado
- Raio-X com pontos fracos e calibração
- Missões diárias, ofensiva, liga semanal com rivais simulados, baús e álbum de figurinhas
- Botão Voltar em todas as atividades e suporte ao botão voltar do Android
- Backup do progresso, ajuste do tamanho do texto e modo escuro
- Funciona offline e não coleta dados pessoais

## Arquivos

Todos os arquivos ficam soltos na raiz do repositório, sem pastas.

| Arquivo | Para que serve |
|---|---|
| `index.html` | O jogo completo |
| `pb-app-v3.webmanifest` | Nome, ícones e cores do app instalável |
| `sw.js` | Faz o jogo funcionar offline |
| `privacidade.html` | Política de privacidade (link exigido pela Play Store) |
| `verificar.html` | Confere se o site publicado está pronto para o PWABuilder |
| `pb-icon-192-v3.png`, `pb-icon-512-v3.png`, `pb-maskable-512-v3.png`, `pb-apple-touch-v3.png` | Ícones do app |
| `pb-tela-1-v3.png` a `pb-tela-3-v3.png` | Capturas usadas pelo instalador |
| `*.woff2` e `OFL-LICENSE.txt` | Fontes tipográficas incluídas no app |
| `.nojekyll` | Faz o GitHub Pages publicar os arquivos sem processamento |

## Atualizar o jogo

Basta trocar o `index.html` no repositório: os aparelhos com internet recebem a versão nova na próxima abertura. Se trocar ícones ou fontes, aumente também o número em `CACHE` no `sw.js` (por exemplo, de `pb-v3` para `pb-v4`).

## Licença

© 2026 Flávio S. Praciano. Todos os direitos reservados. As fontes seguem a SIL Open Font License (ver `fonts/OFL-LICENSE.txt`).

O app é independente e não tem vínculo com bancas organizadoras, órgãos públicos ou instituições de ensino.
