# Clima_Temp - Previsão do Tempo

**Clima_Temp** é um aplicativo web desenvolvido com **React** que permite visualizar a previsão do tempo atual e para os próximos 5 dias. Ele consome dados da **Weather API** para mostrar informações como temperatura, umidade, e condições meteorológicas de qualquer cidade.

![Captura de Tela do Clima_Temp](https://drive.google.com/file/d/17uCWHS8QvGi8gI8FVT06-v7UUZi6zCQc/view?usp=drive_link;)

## Funcionalidades

- Exibe a previsão do tempo **de hoje** e para os **próximos 5 dias**.
- Mostra informações detalhadas como:
  - Temperatura atual.
  - Umidade.
  - Condições meteorológicas (ensolarado, nublado, etc.).
  - Ícones representando as condições climáticas.
- Interface moderna e responsiva, otimizada para dispositivos móveis e desktops.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS**: Estilização e responsividade do layout.
- **Weather API**: API externa para obter dados meteorológicos em tempo real.
- **Vercel**: Plataforma para hospedagem e deployment do projeto.

## Estrutura de Pastas

Abaixo está a estrutura de pastas do projeto:

```bash
Clima_Temp/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
│
├── src/
│   ├── assets/
│   │   └── imgs/
│   │       └── screenshot.png
│   ├── components/
│   │   ├── WeatherInformation.js
│   │   ├── WeatherInformation.css
│   │   ├── WeatherInformation.jsx
│   │   └── WeatherInformationDays.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── reportWebVitals.js
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── setupTests.js
```

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/matheusfesantos/Clima_Temp.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Clima_Temp
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

## Deployment

O projeto está hospedado e disponível online via **Vercel**. Você pode acessá-lo através do seguinte link:  
[Clima_Temp no Vercel]([seu-link-aqui](https://clima-temp-nine.vercel.app/))
