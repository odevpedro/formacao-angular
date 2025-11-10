# Formação Angular
Angular é um framework javascript de código aberto que serve para criar SPA - Single Pages Applications, aplicações de única tela. Uma única pagina atende a necessidade do nosso projeto sem ter a necessidade de recarregar a pagina toda vez que alguma alteração é feita. Uma aplicação angular é baseada em componentes. Com os componenetes podemos encapsular regars da interface tornando a criação de aplicações algo mais simples. Inclusive um componente pode encapsular outros componentes.

**Componentes** → Divide a UI em partes independentes e reutilizavéis, trata cada parte da aplicação como um bloco isolado., livre de outras dependências externas. Eles aceitam entradas e retornam elementos que descrevem o que deve aparecer na tela.

Angular facilita a manutenção de layouts complexos e isola as responsabilidades de cada parte do seu código.



Estrutura de um projeto angular:
![alt text](image.png)


**Components**:

- component.css = Estilo do componente
- component.html = Estrutura html do componente
- component.ts = lógica do nosso componente

OBS:

**app.ts** - Nosso arquivo de entrada, carrega o módulo principal no module vai ser carregado o primeiro componente que é o app módule.