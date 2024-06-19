# What is SQLite?

**Learn about the SQLite database engine and how to install it on your computer**

## What is SQLite?

SQLite is a database engine. It is software that allows users to interact with a relational database. In SQLite, a database is tored in a single file - a trait that distinguishes it from other database engines. This fact allows for a great deal of accessibility: copying a database is no more complicated than copying the file that stores the data, sharing a database can mean sending an email attachment

### Drawbacks to SQLite

SQLite's signature portability unfortunately makes it a poor choice when many different users are updating the table at the same time (to maintain integrity of data, only one user can write to the file at a time). It also may require some more work to ensure the security of oprivate data due to the same features that make SQLite accessible. Furthermore, SQLite does not offer the same exact functionality as many other database systems, limiting some advanced features other relational database systems offer. Lastly, SQLite does not validate data types. Where many other database software would reject data that does not conform to a table's schema, SQLite allows users to store data of any type into any column

SQLite creates schemas, which constrain the type of data in each column, but it does not enforce them. The example below shows that the id column expects to store integers, the name column expects to store text, and the age column expects to store integers

```
CREATETABLE** celebs (
   id INTEGER,
   name TEXT,
   age INTEGER
);
```

Howerver, SQLite
