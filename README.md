=========================
=== INSTALAÇÃO NODEJS ===
=========================

- sudo apt-get update
- sudo apt-get install build-essential libssl-dev
- curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

Observação - Acessar o site: https://github.com/creationix/nvm para verificar se existe uma nova versão para instalação do nvm.

Para listar as versões do NodeJS
- nvm ls-remote

Para instalar uma versão do NodeJS
- nvm install versão_do_node

Para alternar entre as versões do NodeJS instaladas
- nvm use versão_do_node

Para verificar a versão do NodeJS instalada
- node -v

Observação - Ao instalar o NodeJS o NPM já será instalado como bônus.

Para atualizar o NPM
- npm i npm -g

=============================
=== INSTALAÇÃO TYPESCRIPT ===
=============================

- npm install -g typescript

Para compilar um arquivo typescript
- tsc nome_do_arquivo_typescript

Observação - Site para acompanhar as novas features que foram lançadas para o ECMA Script 6/ ECMA Script 2015: www.es6-features.org

Observação - Site para estudar eventos do JavaScript: https://developer.mozilla.org/en-US/docs/Web/Events

============================
=== INSTALAÇÃO BOOTSTRAP ===
============================

- npm install ng2-bootstrap bootstrap --save

==========================
=== INSTALAÇÃO ANGULAR ===
==========================

- npm install -g @angular/cli

Para verificar a versão do angular
- ng v

========================
=== COMANDOS ANGULAR ===
========================

Para criar um novo projeto
- ng new nome_do_projeto

Para servir/rodar um projeto
- ng s / - ng serve

Para criar um componente
- ng g c nome_do_componente

Para criar um módulo
- ng g m nome_do_módulo

Para criar um serviço
- ng g s nome_do_serviço

===========================
=== OBSERVAÇÕES ANGULAR ===
===========================

Observação - Para utilizar o two-way data-binding é necessário importar o módulo FormsModule.

======================
=== INPUT PROPERTY ===
======================

- É utilizado para repassar dados de um componente para outro através de atributos criados nos elementos HTML.

Observação - Para utilizar o input property é nessário importar o módulo Input.