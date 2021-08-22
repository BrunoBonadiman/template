 # FRONTEND

## conceitos (tecnicas) utilizados 

 - Object literal
 - Object calisthencs (partes)

## separação por camadas


 **  1. yarn           ( para intalação dos pacotes de dependencia)  **
 **  2. yarn start     ( para inicialização do projeto)  **

## bibliotecas sugeridas para uso

    - Typescript
    - RXJS
    - Axios
    - ts-node

    DEV
    - Prettier
    - TsLinter

## Regras de Codificação

 - Nome de funções
    - Primeira palavra deve ser um verbo no infinitivo
    - Devem seguir os seus devidos modificadores
    - Iniciado com letra minuscula

 - Nome e tipagem de variaveis
    - Utilizar modificadores de forma adqueada (const, sempre que possivel e return direto)
    - variaveis devem iniciar com letras minusculas e não devem ser abreviações não compreensiveis (ex: v, a, us)

 - Nomes de arquivos
    - A primeira vogal ou consoante deve estar Maiuscula e a demais em minusculo e separadas por hífen
    - devem possuir nome do contexto localizado no nome Xxx.service.ts

 - Nomes de Propriedades e Entidades
    - Nome de Entidades devem ser no singular e suas propriedades devem iniciar com letras Maiusculas, utilizando sempre CamelCase para ambos

  - Tamanho de arquivos
    - Arquivos devem evitar conter no mais de 400 linhas

  - Condicionais
    - Evitar a utilização de ELSE e SWITCH CASE, utilizar object literal;

  - Identação
    - Evitar mais de 2 leveis de identação

  - Boas praticas
    - Evite number como indexavel
    - Evitar decorators para classes de component react
    - Evitar utlização de construtores em components react
    - Substituir enumeradores por types ou object.freeze
    - Utilizar arrow function para funções de filtragens e contextualizações com variaveis constantes ou staticas separada para facilitar leitura
