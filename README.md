# Farmagedon

Creat buildings that will be responsible for holding one type of units under them. In order to create a building u need to provide a name for the building and a name for the initial unit. The type prop of the building is going to be used to identify the type of the unit. The unit inside of the building will have a life span from 50 to 100 Once the unit does reach 0 (or less) it is considered as dead. A unit gains health by being feed, it can be feed manualy or having the building feed it in the lifecycle of its 60 seconds.

# About

_NPM_ is the choosen packet manager, no specific reason expcept for maybe reducing the dependency needs. Even doe _Yarn_ seems to be quicker.

The tech stack of the project is:

- Node.js
- Express
- TypeScript
- Docker
- Sqeuelize
- PostgreSQL

Linting for the project was managed with ESLint based on the _airbnb_ configurations manly because it is the standard in the industry, few custom rules have been additionaly added, and for formating prettier was used.

Some of the game affecting values, are set inside of the _.env_ file, so in other words it can be considered as a configuration file instead.

# How To Run?

_Some tool for doing network requests (curl / postamn) should be used in order to invoke the endpoints, since the project does not have a gui that does consume the endpoints._

## First way

### requirements:

It is required that you have installed docker. Also, a docker image for postgres is composed with the project.

### start the project:

Create an docker image for the project:

```
docker build -t farmagedon .
```

To start the project execute the next command form the root of the project:

```
docker-compose -f docker-compose.yml up -d
```

### Second way

### requirements:

Going this way it will be required that u have node.js installed and a postgress database listening on localhost:5432. The databse params:

- username -> postgres
- password -> postgres
- databse -> db_farmagedon
- host -> localhost

### start the project:

Navigate to the root of the project directory, from ther it is required to install all the deppendenciess of the project, by running:

```
npm i
```

Afther that is successfuly compleated, run:

```
npm start
```

The project should be started and listening on port 3000.

# API Doc

### Create a building

_POST_ -> localhost:3000/building - request params:
/ - request body: - name: string _required_ - name of the building - unitName: string _required_ - response payload: - buildingId: string - unitId: string

### Add a unit to the building

_PATCH_ -> localhost:3000/building/:id/unit - request params: - id: string _required_ - id of the building - request body: - name: string _required_ - name of the unit - response payload: - id: string - health: number - type: string

### Feed a unit by id

_PUT_ -> localhost:3000/unit/:id - request params: - id: string _required_ - id of the unit - request body:
/ - response payload:
/

### Get a list of all available buildings

_GET_ -> localhost:3000/building - request params:
/ - request body:
/ - response payload: [

- name: string
- type: string
- numberOfUnits: number
  ]

### Get a building by id

_GET_ -> localhost:3000/building/:id - request params: - id: string _required_ - id of the building - request body:
/ - response payload: - id: string - name: string - type: string - units: [

- id: string
- unit: number
- isAlive: boolean
  ]

### Get a unit by id

_GET_ -> localhost:3000/unit/:id - request params: - id: string _required_ - id of the unit - request body:
/ - response payload: - id: string - name: string - type: string
