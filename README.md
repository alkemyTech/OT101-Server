# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

# Test Users

| User  | Email  | Password | Role |
| :----------------- |:----------------------:| -----:|--------:|
| Austin Powers      | austin@powers.com      | 12345 | 1-Admin |
| John Lennon        | john@lennon.com        | 12345 | 1-Admin |
| Bill Gates         | bill@gates.com         | 12345 | 1-Admin |
| Linus Torvalds     | linus@torvalds.com     | 12345 | 1-Admin |
| Charly García      | charly@garcia.com      | 12345 | 1-Admin |
| León Gieco         | leon@gieco.com         | 12345 | 1-Admin |
| Billie Eilish      | billie@eilish.com      | 12345 | 1-Admin |
| Luke Skywalker     | luke@skywalker.com     | 12345 | 1-Admin |
| Celeste Carballo   | celeste@carballo.com   | 12345 | 1-Admin |
| Margaret Hamilton  | margaret@hamilton.com  | 12345 | 1-Admin |
| Hugo Foncea        | hugo@foncea.com        | 12345 | 2-User  |
| Mateo Ledesma      | mateo@ledesma.com      | 12345 | 2-User  |
| Nicolás Cagiao     | nicolas@cagiao.com     | 12345 | 2-User  |
| German Sanz        | german@sanz.com        | 12345 | 2-User  |
| Alejandro Pascuale | alejandro@pascuale.com | 12345 | 2-User  |
| Pablo Menichini    | pablo@menichini.com    | 12345 | 2-User  |
| Francisco Messina  | francisco@messina.com  | 12345 | 2-User  |
| Federico González  | federico@gonzalez.com  | 12345 | 2-User  |
| Gabriela Damico    | gabriela@damico.com    | 12345 | 2-User  |
| Test User          | test@test.com          | 12345 | 2-User  |