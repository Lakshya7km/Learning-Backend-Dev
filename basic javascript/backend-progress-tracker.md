# Backend Progress Tracker

Use this as your single source of truth. Mark items as done only when you can explain them without notes and have written code for them.

Status format:

- `[ ]` Not done
- `[x]` Done

## Phase 1: JavaScript Fundamentals

### Core Topics

- [x] `let`, `const`, and `var`
- [x] Primitive vs reference values
- [x] Objects and arrays
- [x] Functions and return values
- [x] Scope
- [x] Closures
- [x] `this` keyword
- [ ] Callbacks
- [ ] Promises
- [ ] `async` / `await`
- [ ] Event loop basics
- [ ] CommonJS modules
- [ ] ES modules
- [ ] Error handling with `try/catch`
- [ ] Array methods: `map`, `filter`, `reduce`
- [ ] Array methods: `find`, `some`, `every`
- [ ] Destructuring
- [ ] Spread and rest operators

### Build Milestones

- [ ] Build a CLI expense tracker using arrays and objects
- [ ] Build a file-based notes app using the `fs` module
- [ ] Build an async app that fetches API data and saves filtered results

### Self-Test

- [ ] Explain closures with your own example
- [ ] Explain promises and why they are needed
- [ ] Explain synchronous vs asynchronous code
- [ ] Explain the event loop at a beginner-friendly level
- [ ] Explain `==` vs `===`
- [ ] Explain primitive vs reference value behavior

## Phase 2: Node.js Core

### Core Topics

- [ ] What Node.js is
- [ ] Node.js runtime vs browser runtime
- [ ] `npm`
- [ ] `package.json`
- [ ] Built-in `fs` module
- [ ] Built-in `path` module
- [ ] Built-in `http` module
- [ ] Environment variables
- [ ] `process` object
- [ ] Streams basics
- [ ] Creating a server without Express

### Build Milestones

- [ ] Build a raw Node.js HTTP server
- [ ] Add `GET /health`
- [ ] Add `GET /users`
- [ ] Add `POST /users`
- [ ] Save users in a JSON file

### Self-Test

- [ ] Explain why Express exists
- [ ] Explain request and response objects
- [ ] Explain what `package.json` does
- [ ] Explain environment variables
- [ ] Explain the difference between browser JavaScript and Node.js

## Phase 3: Express.js

### Core Topics

- [ ] Express app setup
- [ ] Routing
- [ ] Controllers
- [ ] Middlewares
- [ ] Request-response lifecycle
- [ ] HTTP status codes
- [ ] REST API design
- [ ] Input validation
- [ ] Central error handling
- [ ] Logging
- [ ] `dotenv`
- [ ] CORS
- [ ] API testing with Postman or Thunder Client

### Project: Task Management API

- [ ] Create clean project structure
- [ ] Add user registration
- [ ] Add user login
- [ ] Add password hashing
- [ ] Add JWT authentication
- [ ] Add create task endpoint
- [ ] Add get tasks endpoint
- [ ] Add update task endpoint
- [ ] Add delete task endpoint
- [ ] Add task status: `todo`, `in-progress`, `done`
- [ ] Add filtering by status
- [ ] Add pagination
- [ ] Add input validation
- [ ] Add central error handler
- [ ] Test all endpoints manually
- [ ] Push project to GitHub

### Self-Test

- [ ] Explain middleware
- [ ] Explain REST
- [ ] Explain JWT
- [ ] Explain password hashing
- [ ] Explain common HTTP status codes
- [ ] Explain how error handling works in Express

## Phase 4: MongoDB and Mongoose

### Core Topics

- [ ] MongoDB documents
- [ ] Collections
- [ ] Schema design
- [ ] Mongoose models
- [ ] CRUD with Mongoose
- [ ] Mongoose schema validation
- [ ] Indexes
- [ ] `populate`
- [ ] Aggregation basics
- [ ] Transactions basics
- [ ] Embed vs reference decision

### Upgrade: Task Management API

- [ ] Replace JSON file storage with MongoDB
- [ ] Create User model
- [ ] Create Task model
- [ ] Add user-task relationship
- [ ] Add indexes
- [ ] Add search
- [ ] Add pagination with MongoDB
- [ ] Test all MongoDB-backed endpoints

### Self-Test

- [ ] Explain indexes
- [ ] Explain embed vs reference
- [ ] Explain Mongoose validation
- [ ] Explain `populate`
- [ ] Explain why passwords should never be stored directly

## Phase 5: SQL and PostgreSQL

### Core Topics

- [ ] Tables
- [ ] Primary keys
- [ ] Foreign keys
- [ ] One-to-many relationships
- [ ] Many-to-many relationships
- [ ] `JOIN`
- [ ] `GROUP BY`
- [ ] Indexes in SQL
- [ ] Transactions
- [ ] Normalization
- [ ] SQL injection
- [ ] Raw SQL basics
- [ ] Prisma basics

### Project: Blogging or Learning Platform API

- [ ] Design database schema
- [ ] Create users table
- [ ] Create posts table
- [ ] Create comments table
- [ ] Create likes table
- [ ] Create tags table
- [ ] Add authentication
- [ ] Add create/read/update/delete posts
- [ ] Add comments
- [ ] Add likes
- [ ] Add tags
- [ ] Add pagination
- [ ] Add search
- [ ] Add user/admin role
- [ ] Test all endpoints
- [ ] Push project to GitHub

### Self-Test

- [ ] Explain primary key vs foreign key
- [ ] Explain inner join vs left join
- [ ] Explain transactions
- [ ] Explain normalization
- [ ] Explain SQL injection
- [ ] Explain when SQL is better than MongoDB

## Phase 6: TypeScript

### Core Topics

- [ ] Basic types
- [ ] Interfaces
- [ ] Type aliases
- [ ] Union types
- [ ] Intersection types
- [ ] Optional fields
- [ ] Generics basics
- [ ] Typing function parameters
- [ ] Typing function return values
- [ ] Typing Express request and response
- [ ] `tsconfig.json`
- [ ] Strict mode

### Build Milestones

- [ ] Convert one Express project to TypeScript
- [ ] Add typed DTO-like request objects
- [ ] Add typed service functions
- [ ] Fix all TypeScript errors without using `any` everywhere

### Self-Test

- [ ] Explain why TypeScript is useful
- [ ] Explain interface vs type
- [ ] Explain union types
- [ ] Explain generics with a simple example
- [ ] Explain what `strict` mode does

## Phase 7: NestJS

### Core Topics

- [ ] NestJS project structure
- [ ] Modules
- [ ] Controllers
- [ ] Providers and services
- [ ] Dependency injection
- [ ] DTOs
- [ ] Pipes
- [ ] Guards
- [ ] Interceptors basics
- [ ] Exception filters basics
- [ ] Config module
- [ ] Prisma or TypeORM integration
- [ ] JWT authentication in NestJS
- [ ] Swagger docs

### Project: Job Application Tracker API

- [ ] Create NestJS project
- [ ] Add authentication
- [ ] Add companies module
- [ ] Add job applications module
- [ ] Add notes
- [ ] Add statuses: `applied`, `interview`, `rejected`, `offer`
- [ ] Add reminders
- [ ] Add user/admin roles
- [ ] Connect PostgreSQL
- [ ] Add Swagger documentation
- [ ] Test all endpoints
- [ ] Push project to GitHub

### Self-Test

- [ ] Explain module/controller/service in NestJS
- [ ] Explain dependency injection
- [ ] Explain guards
- [ ] Explain pipes
- [ ] Explain DTOs
- [ ] Explain how NestJS is different from Express

## Phase 8: Production Basics

### Core Topics

- [ ] Unit testing basics
- [ ] Integration testing basics
- [ ] Jest
- [ ] Supertest
- [ ] Docker basics
- [ ] Dockerfile
- [ ] Docker Compose
- [ ] `.env` management
- [ ] API documentation
- [ ] Deployment basics
- [ ] GitHub README writing
- [ ] Basic backend system design

### Final Polish

- [ ] Add tests to at least one project
- [ ] Dockerize at least one project
- [ ] Deploy at least one API
- [ ] Write strong README files
- [ ] Add Postman collection or Swagger docs
- [ ] Add architecture diagram
- [ ] Clean GitHub repositories
- [ ] Prepare 2-minute explanation for each project
- [ ] Prepare resume bullets for each project

## Final Resume Checklist

- [ ] Task Management API is complete
- [ ] Blogging or Learning Platform API is complete
- [ ] Job Application Tracker API is complete
- [ ] At least one project is deployed
- [ ] At least one project has tests
- [ ] At least one project has Docker setup
- [ ] GitHub profile is clean
- [ ] README files explain setup, features, and APIs
- [ ] Resume has backend project bullets
- [ ] You can explain every project without reading code

## Daily Habit Tracker

- [ ] Backend coding completed today
- [ ] DSA completed today
- [ ] Notes revised today
- [ ] GitHub commit made today
- [ ] Yesterday's topic revised before new topic
