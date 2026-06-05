# Backend Progress Tracker

Rule: mark `[x]` only when both are true:

1. You can explain it without notes.
2. You have written working code for it.

Main sequence:

```txt
JavaScript -> Node Core -> Express -> MongoDB -> SQL -> Deployment -> TypeScript Refactor -> Advanced Backend -> AI Integration -> Capstone
```

## Phase 1: JavaScript Fundamentals

### Core Topics

- [x] `let`, `const`, and `var`
- [x] Primitive vs reference values
- [x] Objects
- [x] Arrays
- [x] Functions and return values
- [x] Scope
- [x] Closures
- [x] `this` keyword basics
- [x] Error handling with `try/catch`
- [x] Callbacks
- [x] Promises basics
- [x] `async` / `await` basics
- [x] Event loop basics
- [x] CommonJS: `require` and `module.exports`
- [x] ES modules: `import` and `export`
- [x] `map`
- [x] `filter`
- [x] `reduce`
- [x] `find`
- [x] `some`
- [x] `every`
- [x] Destructuring
- [x] Spread operator
- [x] Rest operator

### Build Milestones

- [ ] CLI expense tracker
- [ ] File-based notes app using `fs`
- [ ] Async API fetch and save app

### Self-Test

- [x] Explain closures
- [x] Explain promises
- [x] Explain sync vs async
- [x] Explain event loop
- [x] Explain `==` vs `===`
- [x] Explain primitive vs reference values

## Phase 2: Node.js Core

Keep raw Node small. The goal is to understand what Express simplifies.

### Core Topics

- [x] What Node.js is
- [x] Node.js runtime vs browser runtime
- [x] `npm` basics
- [x] `package.json`
- [x] `package-lock.json`
- [x] Module wrapper basics
- [x] Using external packages
- [x] `path` module basics
- [x] `fs` module basics
- [x] `process` object
- [x] Environment variables
- [x] HTTP module basics
- [x] Parse URL
- [x] Parse JSON request body
- [x] Send JSON response

### Mini Build: Raw Node Users API

- [x] Create raw HTTP server
- [x] `GET /health`
- [x] `GET /users`
- [x] `POST /users`
- [x] Save users to JSON file
- [x] Handle invalid JSON body
- [x] Handle unknown routes

### Self-Test

- [x] Explain Node.js
- [x] Explain `package.json`
- [x] Explain browser JavaScript vs Node.js
- [x] Explain request object
- [x] Explain response object
- [x] Explain why Express exists

## Phase 3: Express.js and REST APIs

### Core Topics

- [x] Express setup
- [x] Routing
- [x] Controllers
- [x] Services
- [x] Middlewares
- [x] Request-response lifecycle
- [x] HTTP methods
- [x] HTTP status codes
- [x] REST API design
- [x] Input validation
- [x] Global error format
- [x] Central error handling
- [x] Logging basics
- [x] `dotenv`
- [x] CORS
- [x] Request body size limits
- [x] API versioning basics
- [x] Postman or Thunder Client

### Project: Task Management API

- [ ] Clean folder structure
- [ ] User registration
- [ ] User login
- [ ] Password hashing
- [ ] JWT authentication
- [ ] Cookie vs header auth basics
- [ ] Auth middleware
- [ ] Role-based access control basics
- [ ] Create task
- [ ] Get all tasks
- [ ] Get single task
- [ ] Update task
- [ ] Delete task
- [ ] Task status: `todo`, `in-progress`, `done`
- [ ] Filtering by status
- [ ] Search
- [ ] Pagination
- [ ] Validation
- [ ] Global error response format
- [ ] Manual API testing
- [ ] Push to GitHub

### Self-Test

- [ ] Explain middleware
- [ ] Explain REST
- [ ] Explain JWT
- [ ] Explain cookie auth vs header auth
- [ ] Explain password hashing
- [ ] Explain status codes
- [ ] Explain Express error handling
- [ ] Explain role-based access control

## Phase 4: MongoDB and Mongoose

### Core Topics

- [ ] MongoDB documents
- [ ] Collections
- [ ] Schema design
- [ ] Mongoose models
- [ ] CRUD with Mongoose
- [ ] Mongoose validation
- [ ] Indexes
- [ ] `populate`
- [ ] Aggregation basics
- [ ] Transactions basics
- [ ] Embed vs reference
- [ ] Seed scripts basics

### Upgrade: Task Management API

- [ ] Replace JSON storage with MongoDB
- [ ] User model
- [ ] Task model
- [ ] User-task relationship
- [ ] Indexes
- [ ] Search
- [ ] Pagination with MongoDB
- [ ] Seed demo users and tasks
- [ ] Test all MongoDB-backed endpoints

### Self-Test

- [ ] Explain indexes
- [ ] Explain `populate`
- [ ] Explain Mongoose validation
- [ ] Explain embed vs reference
- [ ] Explain seed scripts
- [ ] Explain password security

## Phase 5: SQL and PostgreSQL

### Core Topics

- [ ] Tables
- [ ] Primary key
- [ ] Foreign key
- [ ] One-to-many relationship
- [ ] Many-to-many relationship
- [ ] `JOIN`
- [ ] `GROUP BY`
- [ ] SQL indexes
- [ ] Transactions
- [ ] Normalization
- [ ] SQL injection
- [ ] Raw SQL basics
- [ ] Database migrations
- [ ] Seed scripts
- [ ] Prisma ORM basics

### Project: Blog Platform API

- [ ] Design schema
- [ ] Users table
- [ ] Posts table
- [ ] Comments table
- [ ] Likes table
- [ ] Tags table
- [ ] Create migrations
- [ ] Create seed script
- [ ] Authentication
- [ ] Role-based access control
- [ ] CRUD posts
- [ ] Comments
- [ ] Likes
- [ ] Tags
- [ ] Search
- [ ] Pagination
- [ ] User/admin roles
- [ ] Testing
- [ ] Push to GitHub

### Self-Test

- [ ] Explain primary key vs foreign key
- [ ] Explain inner join vs left join
- [ ] Explain transactions
- [ ] Explain normalization
- [ ] Explain SQL injection
- [ ] Explain migrations
- [ ] Explain SQL vs MongoDB

## Phase 6: Production and Deployment

### Testing

- [ ] Unit testing basics
- [ ] Integration testing basics
- [ ] Jest
- [ ] Supertest
- [ ] Test auth endpoints
- [ ] Test protected routes
- [ ] Test validation errors
- [ ] Test global error format

### Security and Stability

- [ ] Refresh tokens basics
- [ ] Cookie vs header auth review
- [ ] Role-based access control review
- [ ] Rate limiting
- [ ] Helmet/security headers
- [ ] Request body size limits
- [ ] Input sanitization
- [ ] CORS configuration
- [ ] Production logging
- [ ] Global error format
- [ ] API versioning basics

### Docker

- [ ] Docker basics
- [ ] Dockerfile
- [ ] Docker Compose
- [ ] Run API and database with Docker Compose

### Deployment

- [ ] Environment management
- [ ] Deployment platform setup
- [ ] Deploy Task Management API
- [ ] Deploy Blog Platform API or database-backed API
- [ ] Swagger docs or Postman collection
- [ ] CI/CD basics
- [ ] Verify deployed API manually

### GitHub and Portfolio

- [ ] Strong README for Task API
- [ ] Strong README for Blog API
- [ ] Architecture diagram
- [ ] Clean GitHub repositories
- [ ] Resume project bullets
- [ ] 2-minute project explanation

## Phase 7: TypeScript Refactor

Start after deployment so TypeScript improves working projects instead of delaying them.

### Core Topics

- [ ] Basic types
- [ ] Interfaces
- [ ] Type aliases
- [ ] Union types
- [ ] Intersection types
- [ ] Optional fields
- [ ] Generics basics
- [ ] Function parameter typing
- [ ] Function return typing
- [ ] Express request typing
- [ ] Express response typing
- [ ] `tsconfig.json`
- [ ] Strict mode

### Refactor Milestones

- [ ] Convert Task API to TypeScript
- [ ] Add typed DTO-like request objects
- [ ] Add typed service functions
- [ ] Type middleware and error handler
- [ ] Remove careless `any` usage
- [ ] Keep tests passing after conversion
- [ ] Redeploy TypeScript version

### Self-Test

- [ ] Explain why TypeScript helps backend development
- [ ] Explain interface vs type
- [ ] Explain union types
- [ ] Explain generics
- [ ] Explain strict mode

## Phase 8: Advanced Backend After Deployment

Start this only after at least one project is deployed and explainable.

### Authentication Upgrades

- [ ] Refresh tokens implementation
- [ ] Access token and refresh token flow
- [ ] Forgot password flow
- [ ] Email verification
- [ ] OTP authentication
- [ ] Google OAuth
- [ ] GitHub OAuth

### File Uploads and Media

- [ ] File upload basics
- [ ] Multer
- [ ] File upload APIs
- [ ] Image validation
- [ ] Multiple file upload
- [ ] Cloudinary upload
- [ ] Cloudinary delete

### Caching and Performance

- [ ] Redis basics
- [ ] Redis caching
- [ ] Cache invalidation basics
- [ ] Database query optimization
- [ ] Pagination performance

### Background Jobs

- [ ] Queue concepts
- [ ] BullMQ basics
- [ ] Redis queues
- [ ] Background workers
- [ ] Email worker

### Realtime Backend

- [ ] WebSocket basics
- [ ] Socket.IO
- [ ] Real-time chat API
- [ ] Online/offline user status

### Payments

- [ ] Payment gateway concepts
- [ ] Razorpay integration
- [ ] Stripe integration
- [ ] Webhooks
- [ ] Payment verification

### Scaling Basics

- [ ] Reverse proxy basics
- [ ] Nginx basics
- [ ] Load balancer basics
- [ ] Horizontal vs vertical scaling
- [ ] Database scaling basics

### Search

- [ ] Full-text search basics
- [ ] PostgreSQL full-text search
- [ ] Search indexing basics
- [ ] Elasticsearch basics

## Phase 9: AI Integration After Backend Deployment

AI should be added as a backend feature, not as a shortcut before backend fundamentals.

### AI API Fundamentals

- [ ] What an AI API does
- [ ] Prompt vs system instruction
- [ ] Tokens and cost basics
- [ ] Model selection basics
- [ ] API key security
- [ ] Rate limits
- [ ] Error handling for AI calls

### AI Feature: Smart Task Assistant

- [ ] Add AI endpoint to Task API
- [ ] Generate task summaries
- [ ] Suggest task priority
- [ ] Suggest next actions
- [ ] Store AI output in database
- [ ] Add retry and timeout handling
- [ ] Add usage logging

### AI Feature: Blog Assistant

- [ ] Generate blog outline
- [ ] Improve title
- [ ] Summarize post
- [ ] Generate tags
- [ ] Moderate unsafe or spam content
- [ ] Save AI results with user ownership

### Retrieval and Search Basics

- [ ] Embeddings concept
- [ ] Vector search concept
- [ ] Store document chunks
- [ ] Search relevant chunks
- [ ] Build simple Q&A over user notes

### AI Production Concerns

- [ ] Validate user input before AI call
- [ ] Never expose API key to frontend
- [ ] Add rate limiting for AI endpoints
- [ ] Add request timeout
- [ ] Add fallback response
- [ ] Log token usage
- [ ] Handle model/API failure gracefully

## Phase 10: Capstone Project

Build this after Task API and Blog API. The goal is to combine backend skills into one resume-level project.

Project idea: Learning and Interview Prep Platform.

### Core Features

- [ ] User registration and login
- [ ] Role-based access: student/admin
- [ ] Courses or topics
- [ ] Notes or lessons
- [ ] Task planner
- [ ] Blog/posts section
- [ ] Comments
- [ ] Likes or bookmarks
- [ ] Search
- [ ] Pagination
- [ ] File upload for resources
- [ ] Admin dashboard APIs

### Backend Quality

- [ ] Express clean architecture
- [ ] MongoDB or PostgreSQL database design
- [ ] Migrations or seed scripts if using SQL
- [ ] JWT auth with refresh tokens
- [ ] Rate limiting
- [ ] Helmet/security headers
- [ ] Global error format
- [ ] API versioning
- [ ] Logging
- [ ] Tests
- [ ] Docker setup
- [ ] Deployed API
- [ ] Swagger or Postman docs

### AI Add-On After Deployment

- [ ] AI note summarizer
- [ ] AI quiz generator
- [ ] AI interview question generator
- [ ] AI study plan generator
- [ ] AI usage logging
- [ ] AI rate limiting

## Final Resume Checklist

- [ ] Task Management API complete
- [ ] Blog Platform API complete
- [ ] One project deployed
- [ ] One project Dockerized
- [ ] One project tested
- [ ] TypeScript refactor complete for one project
- [ ] One project has Swagger or Postman docs
- [ ] Capstone project started
- [ ] Capstone project deployed
- [ ] At least one AI feature added after deployment
- [ ] GitHub clean
- [ ] Strong README files
- [ ] Resume project bullets written
- [ ] Can explain every project without notes

## Current Status

- Phase 1 core topics: complete
- Current learning position: Phase 2
