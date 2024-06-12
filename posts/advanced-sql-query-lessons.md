---
title: "SQL Lessons"
date: "2024-06-12"
excerpt: "This is a summary of my first blog post."
---

# Simple SQL only exists in tutorials.

Here are 5 lessons I learned the hard way.

## 1. Avoid Over-Indexing

Indexes are a powerful tool for speeding up data retrieval. They work by creating an extra data structure that the database can use to locate rows. However, they are not for free; each index requires more storage and slows down write operations.

Create indexes on columns used in search conditions (WHERE, JOIN) and sorting (ORDER BY).

## 2. Query Structure Impacts Performance

Complex queries with subqueries and nested logic will force the database to work more. Sometimes, running two or more queries and adding them on the server side makes sense. Selecting only the necessary columns reduces the data the database has to process and transfer.

## 3. Pay Attention to JOINs and WHEREs

JOINs combine rows from two or more tables based on a related column. WHERE filters records. JOINs and WHERE clauses can reduce the rows you need to process in later stages of the query. Write the WHEREs and JOINs taking advantage of indexes.

## 4. Subqueries Need Careful Handling

Correlated subqueries execute for each row in the outer query, leading to inefficiency. Rewriting subqueries as JOINs or using temporary tables will improve performance.

## 5. Your Database Design Impacts Your Query Performance

Data normalization involves organizing the schema to reduce redundancy and improve data integrity. But it can lead to complex queries with many JOINs. Denormalization simplifies queries at the expense of increased data redundancy.

---

What else?
